import React from "react";
import { Link, Match } from "@reach/router";
import { Spinner } from "../components/Spinner";

export function Navigation({ children, location }) {
  return (
    <>
      <nav
        style={{
          height: 50,
          display: "flex",
          alignItems: "center",
          background: "#b8c5ca",
          padding: "0 16px"
        }}
      >
        <Match path="/:login">
          {({ match }) => (
            <Link
              to="/"
              style={{
                color: "#fff",
                fontWeight: 800,

                width: 200,
                display: "block",
                fontSize: 16
              }}
            >
              {match ? (
                "👈 Back"
              ) : (
                <>
                  <IconMovie
                    height={24}
                    width={24}
                    style={{
                      verticalAlign: "middle",
                      paddingBottom: ".2rem",
                      marginRight: 8
                    }}
                  />
                  Movie Database
                </>
              )}
            </Link>
          )}
        </Match>
      </nav>
      <React.Suspense fallback={<Spinner loadingText="Suspense" />}>
        {children}
      </React.Suspense>
    </>
  );
}

function IconMovie(props) {
  return <div> Movie</div>;
}
