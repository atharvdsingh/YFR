import { useParams } from "react-router-dom";
import { useState } from "react";
import { ThumbsUp, ThumbsDown, MessageCircle } from "lucide-react";

export default function CategoryDetails() {
  const { id } = useParams();

  // Dummy data (you will replace with API/backend)
  const item = {
    title: "Sample Episode",
    description: "Deep dive discussion on important topic",
    coverImage: "/sample.jpg",
    audioUrl: "/audio.mp3"
  };

  const [up, setUp] = useState(24);
  const [down, setDown] = useState(3);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const postComment = () => {
    if (!newComment.trim()) return;
    setComments([...comments, newComment]);
    setNewComment("");
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      
      {/* BIG BANNER IMAGE */}
      <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg">
        <img src={item.coverImage} className="w-full h-full object-cover" />
      </div>

      {/* TITLE + DESCRIPTION */}
      <h1 className="text-3xl font-bold mt-5">{item.title}</h1>
      <p className="text-gray-600 mt-2">{item.description}</p>

      {/* PLAYER */}
      <audio src={item.audioUrl} controls className="w-full mt-4" />

      {/* ACTION SECTION */}
      <div className="flex gap-6 mt-6 items-center">
        <button className="flex items-center gap-2" onClick={() => setUp(up + 1)}>
          <ThumbsUp size={20} className="text-green-600" />
          <span>{up}</span>
        </button>

        <button className="flex items-center gap-2" onClick={() => setDown(down + 1)}>
          <ThumbsDown size={20} className="text-red-600" />
          <span>{down}</span>
        </button>

        <div className="flex items-center gap-2">
          <MessageCircle size={20} />
          <span>{comments.length} Comments</span>
        </div>
      </div>

      {/* COMMENTS INPUT */}
      <div className="mt-6">
        <textarea
          className="w-full border rounded-xl p-3"
          rows="3"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>

        <button
          onClick={postComment}
          className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          Post Comment
        </button>
      </div>

      {/* COMMENTS LIST */}
      <div className="mt-6 space-y-4">
        {comments.map((c, i) => (
          <div key={i} className="p-3 bg-gray-100 rounded-xl">
            {c}
          </div>
        ))}
      </div>

    </div>
  );
}
