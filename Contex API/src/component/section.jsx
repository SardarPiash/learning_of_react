import { LevelContex } from "../contexAPI/LevelContex";

export default function section({ level, children }) {
    return (
      <section style={{border:"2px solid black"}}>
        <div style={{margin:"4px"}}>
            <LevelContex.Provider value={level}>
            {children}
            </LevelContex.Provider>
        </div>
      </section>
    );
  }
  