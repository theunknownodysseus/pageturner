import { motion } from "framer-motion";
import { FaLeaf, FaDragon, FaShieldAlt, FaMask, FaPalette, FaBolt, FaBookmark } from "react-icons/fa";

function BookmarkVisual({ design, onClick }) {
    // Comic-style theme configuration
    const getThemeStyles = (name) => {
        const normalized = name.toLowerCase().replace(/\s/g, '');
        switch (normalized) {
            case 'nature':
                return { bg: '#A8E063', accent: '#2E7D32', icon: <FaLeaf /> };
            case 'fantasy':
                return { bg: '#9D50BB', accent: '#4A148C', icon: <FaDragon /> };
            case 'marvel':
                return { bg: '#ED213A', accent: '#B71C1C', icon: <FaShieldAlt /> };
            case 'dc':
                return { bg: '#2C3E50', accent: '#000000', icon: <FaMask /> };
            case 'paintings':
                return { bg: '#FDC830', accent: '#EF6C00', icon: <FaPalette /> };
            case 'harrypotter':
                return { bg: '#743436', accent: '#FFD700', icon: <FaBolt /> };
            default:
                return { bg: '#bdc3c7', accent: '#333', icon: <FaBookmark /> };
        }
    };

    const theme = getThemeStyles(design.name);

    return (
        <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className="comic-border"
            style={{
                width: "100%",
                maxWidth: "300px",
                height: "450px",
                backgroundColor: "white",
                position: "relative",
                cursor: "pointer",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column"
            }}
        >
            {/* Top Price Tag */}
            <div style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background: "var(--color-accent)",
                color: "#fff",
                padding: "5px 12px",
                fontFamily: "var(--font-heading)",
                fontSize: "1.8rem",
                transform: "rotate(3deg)",
                boxShadow: "4px 4px 0 #000",
                zIndex: 10,
                border: "2px solid #000"
            }}>
                ₹{design.price}
            </div>

            {/* Cover Art Area */}
            <div style={{
                flex: 3,
                background: theme.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "8rem",
                color: "rgba(255,255,255,0.9)",
                borderBottom: "4px solid #000",
                position: "relative",
                overflow: "hidden"
            }}>
                {/* Halftone pattern overlay */}
                <div style={{
                    position: "absolute",
                    top: 0, left: 0, width: "100%", height: "100%",
                    backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)",
                    backgroundSize: "8px 8px",
                    opacity: 0.15
                }}></div>

                <div style={{ filter: "drop-shadow(8px 8px 0px rgba(0,0,0,0.3))" }}>
                    {theme.icon}
                </div>
            </div>

            {/* Bottom Title Area */}
            <div style={{
                flex: 1,
                background: "#fff",
                padding: "15px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderTop: "1px solid #000",
                backgroundImage: "linear-gradient(45deg, #f0f0f0 25%, transparent 25%, transparent 75%, #f0f0f0 75%, #f0f0f0), linear-gradient(45deg, #f0f0f0 25%, transparent 25%, transparent 75%, #f0f0f0 75%, #f0f0f0)",
                backgroundPosition: "0 0, 10px 10px",
                backgroundSize: "20px 20px"
            }}>
                <h3 className="comic-title" style={{
                    margin: 0,
                    color: "#000",
                    fontSize: "2.2rem",
                    textAlign: "left",
                    textShadow: "2px 2px 0px #ddd"
                }}>
                    {design.name}
                </h3>
                <span style={{
                    color: "#111",
                    fontFamily: "var(--font-hand)",
                    fontSize: "1rem",
                    marginTop: "5px",
                    fontWeight: "bold"
                }}>
                    COLLECTIBLE SERIES #0{Math.floor(Math.random() * 9) + 1}
                </span>
            </div>
        </motion.div>
    );
}

export default BookmarkVisual;
