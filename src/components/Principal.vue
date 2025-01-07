<template>
    <section class="container py-5">
        <HeroSection />
        <InfoSection />
        <Properties :properties="properties" @open-lightbox="openLightbox"/>
        <SpecialOffersCarousel :specialOffers="specialOffers" @open-lightbox="openLightbox"/>
        <FeaturedCarousel :featuredImages="featuredImages" @open-lightbox="openLightbox" />        
        <Contact />
        <Lightbox :image="currentImage" :visible="lightboxVisible" @close-lightbox="closeLightbox" />
        <Footer />
    </section>
</template>

<script>
import InfoSection from './InfoSection.vue';
import Properties from './Properties.vue';
import FeaturedCarousel from './FeaturedCarousel.vue';
import SpecialOffersCarousel from './SpecialOffersCarousel.vue';
import Contact from './Contact.vue';
import Lightbox from './Lightbox.vue';
import Footer from './Footer.vue';
import HeroSection from './HeroSection.vue';

export default {
    components: {
        InfoSection,
        Properties,
        FeaturedCarousel,
        SpecialOffersCarousel,
        Contact,
        Lightbox,
        Footer,
        HeroSection
    },
    data() {
        return {
            lightboxVisible: false,
            currentImage: null,
            featuredImages: [
                "IMG_7257.jpg",
                "IMG_7261.jpg",
                "IMG_7231.jpg",
                "castillo-serra.webp"
            ],
            specialOffers: [
                { 
                    image: "IMG_5163.jpg", 
                    description: "Despierta cada día con espectaculares vistas a la Sierra Calderona. Naturaleza y tranquilidad a solo un paso." 
                },
                { 
                    image: "IMG_7033.jpg", 
                    description: "Reserva ahora y vive la experiencia perfecta en un entorno único." 
                },
                { 
                    image: "IMG_7084.jpg", 
                    description: "Relájate en nuestra piscina comunitaria con impresionantes vistas a la montaña. Ideal para disfrutar en familia." 
                },
            ],
            properties: [
                { images: ["IMG_7171.jpg", "IMG_1636.jpg", "IMG_1986.jpg"] },
                { images: ["IMG_7231.jpg", "IMG_7231.jpg", "IMG_7231.jpg"] },
                { images: ["IMG_7257.jpg", "IMG_7257.jpg", "IMG_7231.jpg"] }
            ]
        };
    },
    methods: {
        openLightbox(image) {
            this.currentImage = image;
            this.lightboxVisible = true;
        },
        closeLightbox() {
            this.lightboxVisible = false;
        }
    }
};
</script>
