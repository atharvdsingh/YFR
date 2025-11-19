import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../components/ToastProvider";

export default function PodcastDetails() {
  const { id } = useParams();
  const { token } = useAuth();
  const toast = useToast();
  const [podcast, setPodcast] = useState(null);
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(`/api/podcasts/${id}`).then(r => r.json()).then(d => { setPodcast(d); setComments(d.comments || []); }).catch(()=>toast.push("Failed to load podcast"));
  }, [id]);

  const postComment = async () => {
    if (!text) return;
    try {
      const res = await fetch(`/api/podcasts/${id}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: token ? `Bearer ${token}` : undefined },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Comment failed");
      setComments((c) => [data, ...c]);
      setText("");
    } catch (err) {
      toast.push(err.message || "Comment error");
    }
  };

  if (!podcast) return <div className="pt-24 p-6">Loading...</div>;

  return (
    <section className="pt-24 p-6 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded">
        <h1 className="text-2xl font-bold mb-4">{podcast.title}</h1>
        <p className="text-gray-600 mb-4">{podcast.description}</p>
        <div className="mb-4"><ReactPlayer url={podcast.audioUrl} controls width="100%" /></div>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">Comments</h3>
          {token ? (
            <div className="mb-3">
              <textarea value={text} onChange={(e)=>setText(e.target.value)} className="w-full p-2 border rounded mb-2"></textarea>
              <button onClick={postComment} className="px-4 py-2 bg-indigo-600 text-white rounded">Post</button>
            </div>
          ) : <p className="text-sm text-gray-500">Please login to comment</p>}

          <div className="space-y-3">
            {comments.map((c) => (
              <div key={c._id || Math.random()} className="p-3 border rounded">
                <div className="text-sm font-semibold">{c.userName || "User"}</div>
                <div className="text-sm text-gray-700">{c.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
