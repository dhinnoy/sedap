import { Link } from "react-router-dom";

export default function Button({name, to}) {
    return (
        <div id="action-button">
            <Link to={to}>
                <button id="add-button" className="bg-hijau text-white px-4 py-2 rounded-lg">
                    {name}
                </button>
            </Link>
        </div>
    );
}
