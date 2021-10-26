import React from "react";
import "./App.css";
import { renderRoutes } from "react-router-config";

export function App ({route}) {
    App.defaultProps = {
        route: null
    };
    return(
        <div className="AppWork">
            <div id="appframe" className="AppFrame">
                <div>{renderRoutes(route.routes)}</div>
            </div>
        </div>
    )
};

