import React from "react";
import {
    BsFillPersonFill,
    BsCodeSlash,
    BsFileTextFill,
    BsFillEnvelopeFill,
} from "react-icons/bs";
import { Link } from "react-scroll";

function Navbar() {
    return (
        <nav
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                padding: "1vh 1vw",
                position: "fixed",
                top: 0,
                width: "100%",
                backgroundColor: "#212121",
                zIndex: 1000,
            }}
        >
            <div className="flex items-center flex-shrink-0 mr-6">
                <svg
                    height="60"
                    id="logo"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 90 100"
                >
                    <title>Logo</title>
                    <g transform="translate(-8.000000, -2.000000)">
                        <g transform="translate(11.000000, 5.000000)">
                            <polygon
                                className="stroke-primary fill-none"
                                id="Shape"
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                points="39 0 0 22 0 67 39 90 78 68 78 23"
                                style={{ stroke: "#f9c74f" }}
                            ></polygon>
                            <text
                                x="50%"
                                y="50%"
                                fontSize="40"
                                fill="#f9c74f"
                                fontFamily="Arial"
                                fontWeight="bold"
                                textAnchor="middle"
                                dy=".2em"
                                dx="-.15em"
                            >
                                S
                            </text>
                        </g>
                    </g>
                </svg>
            </div>

            <div
                style={{
                    display: "flex",
                    gap: "1.2rem",
                    alignItems: "center",
                    fontSize: "1.8rem",
                    color: "#fff",
                    paddingRight: "1.5rem", 
                    paddingLeft: "0.5rem"
                }}
            >
                <div style={{ display: "flex", alignItems: "center", fontSize: "1.2rem" }}>
                    <BsFillPersonFill style={{ fill: "#f9c74f", marginRight: "0.2rem", fontSize: "1.5rem" }} />
                    <Link
                        to="About"
                        smooth={true}
                        duration={500}
                        style={{
                            padding: "0.75rem",
                            cursor: "pointer",
                            color: "#fff",
                            transition: "color 0.3s",
                        }}
                    >
                        About
                    </Link>
                </div>
                <div style={{ display: "flex", alignItems: "center", fontSize: "1.2rem" }}>
                    <BsCodeSlash style={{ fill: "#f9c74f", marginRight: "0.2rem", fontSize: "1.5rem" }} />
                    <Link
                        to="Projects"
                        smooth={true}
                        duration={750}
                        style={{
                            padding: "0.75rem",
                            cursor: "pointer",
                            color: "#fff",
                            transition: "color 0.3s",
                        }}
                    >
                        Projects
                    </Link>
                </div>
                <div style={{ display: "flex", alignItems: "center", fontSize: "1.2rem" }}>
                    <BsFileTextFill style={{ fill: "#f9c74f", marginRight: "0.2rem", fontSize: "1.5rem" }} />
                    <Link
                        to="Career"
                        smooth={true}
                        duration={1000}
                        style={{
                            padding: "0.75rem",
                            cursor: "pointer",
                            color: "#fff",
                            transition: "color 0.3s",
                        }}
                    >
                        Career
                    </Link>
                </div>
                <div style={{ display: "flex", alignItems: "center", fontSize: "1.2rem" }}>
                    <BsFillEnvelopeFill style={{ fill: "#f9c74f", marginRight: "0.2rem", fontSize: "1.5rem" }} />
                    <Link
                        to="Contact"
                        smooth={true}
                        duration={1250}
                        style={{
                            padding: "0.75rem",
                            cursor: "pointer",
                            color: "#fff",
                            transition: "color 0.3s",
                        }}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
