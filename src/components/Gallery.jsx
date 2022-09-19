const Gallery = () => {
    return (
        <section class="overflow-hidden">
            <div class="container px-5  mx-auto lg:pt-24">
                <div class="flex flex-wrap -m-1 md:-m-2">
                    <div class="flex flex-wrap w-1/2">
                        <div class="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block object-cover object-center w-full h-full rounded-lg"
                                src="./assets/images/ceralist-serving-bowl.jpg"
                            />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block object-cover object-center w-full h-full rounded-lg"
                                src="./assets/images/ceralist-tea-cups.jpg"
                            />
                        </div>
                        <div class="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block object-cover object-center w-full h-full rounded-lg"
                                src="./assets/images/ceralist-serving-bottle.jpg"
                            />
                        </div>
                    </div>
                    <div class="flex flex-wrap w-1/2">
                        <div class="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block object-cover object-center w-full h-full rounded-lg"
                                src="./assets/images/ceralist-mid-pots.jpg"
                            />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block object-cover object-center w-full h-full rounded-lg"
                                src="./assets/images/ceralist-mid-bottle.jpg"
                            />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block object-cover object-center w-full h-full rounded-lg"
                                src="./assets/images/ceralist-large-bottles.jpg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
