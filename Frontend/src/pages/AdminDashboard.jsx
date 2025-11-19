import React, { useEffect, useState } from "react";
import { useToast } from "../components/ToastProvider";

/**
 * Plain Tailwind admin dashboard (no shadcn), with placeholder fetches.
 * Replace endpoints with your backend.
 */
export default function AdminDashboard() {
  const toast = useToast();
  const [pending, setPending] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => { fetchPending(); fetchCategories(); }, []);

  async function fetchPending() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/podcasts/pending");
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      setPending(data);
    } catch (err) {
      setPending([
        { _id:"1", title:"AI & Society", createdByName:"Aman", createdAt: Date.now() },
        { _id:"2", title:"Climate Action", createdByName:"Priya", createdAt: Date.now() },
      ]);
    } finally { setLoading(false); }
  }

  async function fetchCategories() {
    try {
      const res = await fetch("/api/admin/categories/pending");
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      setCategories(data);
    } catch (err) {
      setCategories([{ _id:"c1", name:"Urban Ecology", description:"Request" }]);
    }
  }

  async function approvePodcast(id) {
    try {
      const res = await fetch(`/api/podcasts/${id}/approve`, { method: "PUT" });
      if (!res.ok) throw new Error("Approve failed");
      setPending(p => p.filter(x => x._id !== id));
      toast.push("Podcast approved");
    } catch (err) { toast.push(err.message || "Error"); }
  }

  async function approveCategory(id) {
    try {
      const res = await fetch(`/api/categories/${id}/approve`, { method: "PUT" });
      if (!res.ok) throw new Error("Approve failed");
      setCategories(c => c.filter(x => x._id !== id));
      toast.push("Category approved");
    } catch (err) { toast.push(err.message || "Error"); }
  }

  const filtered = pending.filter(p => p.title.toLowerCase().includes(search.toLowerCase()) || (p.createdByName||"").toLowerCase().includes(search.toLowerCase()));

  return (
    <section className="pt-24 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
            <h3 className="font-semibold">Pending Podcasts</h3>
            <div className="mt-3 flex gap-2">
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search" className="flex-1 p-2 border rounded bg-transparent"/>
              <button onClick={fetchPending} className="px-3 py-1 bg-indigo-600 text-white rounded">Refresh</button>
            </div>
            <div className="mt-3 space-y-2">
              {loading ? <div>Loading...</div> : filtered.map(p => (
                <div key={p._id} className="p-3 border rounded flex justify-between items-center">
                  <div>
                    <div className="font-semibold">{p.title}</div>
                    <div className="text-xs text-gray-500">By {p.createdByName}</div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={()=>approvePodcast(p._id)} className="px-2 py-1 bg-green-500 text-white rounded">Approve</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
            <h3 className="font-semibold">Category Requests</h3>
            <div className="mt-3 space-y-2">
              {categories.map(c => (
                <div key={c._id} className="p-3 border rounded flex justify-between items-start">
                  <div>
                    <div className="font-semibold">{c.name}</div>
                    <div className="text-xs text-gray-500">{c.description}</div>
                  </div>
                  <div>
                    <button onClick={()=>approveCategory(c._id)} className="px-2 py-1 bg-green-500 text-white rounded">Approve</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
            <h3 className="font-semibold">Stats</h3>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900 rounded">
                <div className="text-xs text-gray-500">Total Podcasts</div>
                <div className="text-lg font-bold">1,234</div>
              </div>
              <div className="p-3 bg-yellow-50 dark:bg-yellow-900 rounded">
                <div className="text-xs text-gray-500">Pending</div>
                <div className="text-lg font-bold">{pending.length}</div>
              </div>
            </div>
            <div className="mt-3 text-sm text-gray-500">Add charts for plays, signups and approval times.</div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h3 className="font-semibold mb-3">All Pending</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead><tr><th className="p-2">Title</th><th className="p-2">Creator</th><th className="p-2">Date</th><th className="p-2">Actions</th></tr></thead>
              <tbody>
                {pending.map(p => (
                  <tr key={p._id} className="border-t">
                    <td className="p-2">{p.title}</td>
                    <td className="p-2">{p.createdByName}</td>
                    <td className="p-2">{new Date(p.createdAt).toLocaleDateString()}</td>
                    <td className="p-2"><button onClick={()=>approvePodcast(p._id)} className="px-2 py-1 bg-indigo-600 text-white rounded">Approve</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
