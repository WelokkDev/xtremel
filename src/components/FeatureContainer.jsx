export default function FeatureContainer({ icon, title, description, id }) {
    return (
        <div key={id} className="flex flex-col items-left text-left px-4">
            <div className="mb-4">{icon}</div>
            <h3 className="text-lg text-blue-400 font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}