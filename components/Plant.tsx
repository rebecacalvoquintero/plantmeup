import Image from "next/image";

export default function Plant({ plant }) {
    console.log("plant", plant);
    return (
        <section key={plant.id}>
            <h2> {plant.common_name}</h2>
            <img
                src={plant.default_image?.original_url} // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="product image"
            />
            <div>
                <h3>Watering: </h3>
                <p>{plant.watering}</p>
            </div>
        </section>
    )
};