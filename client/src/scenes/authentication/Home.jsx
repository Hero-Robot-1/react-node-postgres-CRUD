import React from "react";

const Home = ({ user }) => {
    return (
        <div style={{ textAlign: "center", margin: "3rem" }}>
            <h1>Dear {user?.email}</h1>

            <p>
                You are viewing this page because you are logged in or you just signed
                up
            </p>
        </div>
    );
};

export default Home;