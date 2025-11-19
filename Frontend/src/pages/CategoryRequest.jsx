import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../components/ToastProvider";

export default function CategoryRequest() {
  const { token } = useAuth();
  const toast = useToast();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("name", name);
    fd.append("description", desc);
    if (imageFile) fd.append("image", imageFile);

    try {
      const res = await fetch("/api/categories/request", {
        method: "POST",
        headers: { Authorization: token ? `Bearer ${token}` : undefined },
        body: fd,
      });
      if (!res.ok) throw new Error("Request failed");
      toast.push("Category request submitted");
      setName(""); setDesc(""); setImageFile(null);
    } catch (err) {
      toast.push(err.message || "Error");
    }
  };

  return (
    <section className="pt-24 p-6">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Request a new Category</h2>
        <form onSubmit={submit} className="space-y-4">
          <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Category name" className="w-full p-2 border rounded bg-transparent"/>
          <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder="Description" className="w-full p-2 border rounded bg-transparent"></textarea>
          <input type="file" accept="image/*" onChange={(e)=>setImageFile(e.target.files[0])}/>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded">Submit Request</button>
        </form>
      </div>
    </section>
  );
}
