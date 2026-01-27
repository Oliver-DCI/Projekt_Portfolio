type AboutModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AboutModal = ({ isOpen, onClose }: AboutModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">

      {/* Hintergrund mit Blur */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative bg-white rounded-xl shadow-2xl p-8 max-w-xl w-full mx-4 animate-fadeIn">
        <h2 className="text-2xl font-semibold mb-4">Über mich</h2>

        <p className="text-slate-700 leading-relaxed">
          Ich bin ein angehender Junior Webentwickler mit Fokus auf modernen
          Webtechnologien wie HTML, CSS, JavaScript, TypeScript und React.
          Besonders wichtig ist mir ein sauberes, responsives Design und eine
          klare Benutzerführung.
          <br /><br />
          Auf meinem Portfolio präsentiere ich meine Projekte so, dass sie
          technisch solide, visuell ansprechend und aussagekräftig sind. Mein
          Ziel ist es, moderne Webanwendungen zu entwickeln, die sowohl
          performant als auch ästhetisch überzeugend sind.
        </p>

        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Schließen
        </button>
      </div>
    </div>
  );
};

export default AboutModal;
