import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";

import BookmarkVisual from "../components/BookmarkVisual";
import Order from "./Order";

function Home() {
  const [selected, setSelected] = useState(null);

  const bookmarks = [
    { id: 1, name: "Nature", price: 20 },
    { id: 2, name: "Fantasy", price: 25 },
    { id: 3, name: "Marvel", price: 22 },
    { id: 4, name: "DC", price: 18 },
    { id: 5, name: "Paintings", price: 30 },
    { id: 6, name: "Harry Potter", price: 20 },
    { id: 7, name: "Nature", price: 20 },
    { id: 8, name: "Fantasy", price: 25 },
  ];

  return (
    <div className="home-container" style={{
      minHeight: "100vh",
      background: "var(--color-primary)",
      overflowY: "auto",
      overflowX: "hidden"
    }}>


      {/* Hero Section */}
      <header style={{
        padding: "60px 20px",
        textAlign: "center",
        position: "relative",
        background: "linear-gradient(rgba(255,51,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,51,0,0.1) 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }}>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          style={{
            fontSize: "clamp(4rem, 15vw, 12rem)",
            margin: 0,
            color: "var(--color-accent)",
            fontFamily: "var(--font-heading)",
            lineHeight: 0.8,
            textTransform: "uppercase",
            textShadow: "10px 10px 0px #fff"
          }}
        >
          BEST BOOKMARK
          <br />
          <br />
          STORE YOU'VE
          <br /><br />
          EVER SEEN
        </motion.h1>
      </header>

      {/* Ripped Paper Divider */}
      <div className="rip-divider rip-top"></div>

      {/* Intro / Statement Section */}
      <section style={{
        background: "#111",
        color: "white",
        padding: "80px 20px",
        textAlign: "center",
        position: "relative"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "var(--font-subheading)",
            fontSize: "3rem",
            textTransform: "uppercase",
            transform: "rotate(-2deg)"
          }}>
            We Have A Wide Selection Of <span style={{ color: "var(--color-accent)", textDecoration: "underline" }}>Bookmarks</span>
          </h2>
          <p style={{ fontFamily: "var(--font-hand)", fontSize: "1.5rem", color: "#ccc", marginTop: "20px" }}>
            Including Bookmarks for your reading journey.
          </p>
        </div>

      </section>

      {/* Ripped Paper Divider */}
      <div className="rip-divider rip-bottom"></div>

      {/* Shop Grid Section */}
      <section style={{ padding: "60px 40px", background: "#f0f0f0" }}>
        <div style={{ marginBottom: "60px", textAlign: "center" }}>
          <h2 className="comic-title" style={{ color: "#000", fontSize: "4rem" }}>
            WIDE SELECTION
          </h2>
          <h2 className="comic-title" style={{ color: "var(--color-accent)", fontSize: "4rem" }}>
            OF BEST COMICS
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "40px",
          maxWidth: "1400px",
          margin: "0 auto"
        }}>
          {bookmarks.map((b) => (
            <div key={b.id} style={{ display: "flex", justifyContent: "center" }}>
              <BookmarkVisual design={b} onClick={() => setSelected(b)} />
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "80px" }}>
          <button style={{
            background: "#000",
            color: "#fff",
            padding: "15px 50px",
            fontSize: "1.5rem",
            fontFamily: "var(--font-subheading)",
            border: "none",
            textTransform: "uppercase",
            cursor: "pointer",
            boxShadow: "5px 5px 0 var(--color-accent)"
          }}>
            See More
          </button>
        </div>
      </section>


      {/* Order Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.9)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000
            }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: 5 }}
              onClick={(e) => e.stopPropagation()}
              className="comic-border"
              style={{
                backgroundColor: "#fff",
                padding: "30px",
                maxWidth: "90%",
                width: "500px",
                position: "relative"
              }}
            >
              <button
                onClick={() => setSelected(null)}
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-20px",
                  background: "var(--color-accent)",
                  color: "#fff",
                  border: "3px solid #000",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}
              >
                &times;
              </button>

              <h2 className="comic-title" style={{ fontSize: "2.5rem", color: "#000", borderBottom: "3px solid #000", paddingBottom: "10px" }}>
                PLACE ORDER
              </h2>
              <Order design={selected} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;
