export default function Card() {
  return (
    <div className="w-full h-full px-2 flex items-center justify-center">
      <div className="bg-white w-72 h-[40vh] rounded-xl shadow-md overflow-hidden relative">
        {/* Top background pattern */}
        <img
          src="/images/bg-pattern-card.svg"
          alt="card background"
          className="w-full"
        />

        {/* Avatar */}
        <div className="flex justify-center">
          <img
            src="/images/image-victor.jpg"
            alt="avatar"
            className="w-24 h-24 rounded-full border-4 border-white -mt-12"
          />
        </div>
      </div>
    </div>
  );
}
