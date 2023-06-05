import React from 'react';

export function Notfound() {
  return (
    <div className="not-found" style={{ height: "calc(100vh - 163px)", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <h1 className="not-found-title">404 - Page Not Found</h1>
      <p className="not-found-message">We're sorry, but the page you are looking for does not exist.</p>
    </div>
  );
}
