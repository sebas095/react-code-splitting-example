import React, { useState, Suspense } from "react";
import "./App.css";

const Surprise = React.lazy(() => import("./components/Surprise"));

function App() {
  const [showSurprise, setShowSurprise] = useState(false);
  return (
    <div>
      <button onClick={(ev) => setShowSurprise(true)}>Mostrar sorpresa</button>
      {showSurprise && (
        <Suspense fallback={<p>Cargando...</p>}>
          <Surprise />
        </Suspense>
      )}
    </div>
  );
}

export default App;
