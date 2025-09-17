// Ft.tsx
const Ft: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} wiorhythm. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Ft;
