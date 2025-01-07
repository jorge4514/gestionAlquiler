<template>
    <section class="contact py-5" id="contacto">
        <div class="container">
            <h2 class="text-center mb-4 fw-bold">Contacto</h2>
            <p class="text-center text-muted mb-5">¿Tienes alguna pregunta o quieres más información? Contáctanos:</p>

            <div class="row justify-content-center">
                <!-- Teléfono -->
                <div class="col-md-3 text-center mb-4">
                    <div class="d-flex justify-content-center align-items-center mb-3">
                        <i class="fas fa-phone-alt me-3"></i>
                        <strong>Teléfono:</strong>
                    </div>
                    <p class="text-muted">+34 667685753</p>
                </div>

                <!-- Email -->
                <div class="col-md-3 text-center mb-4">
                    <div class="d-flex justify-content-center align-items-center mb-3">
                        <i class="fas fa-envelope me-3"></i>
                        <strong>Email:</strong>
                    </div>
                    <p class="text-muted">info@mialquiler.com</p>
                </div>

                <!-- Dirección -->
                <div class="col-md-3 text-center mb-4">
                    <div class="d-flex justify-content-center align-items-center mb-3">
                        <i class="fas fa-map-marker-alt me-3"></i>
                        <strong>Dirección:</strong>
                    </div>
                    <p class="text-muted">📍Serra, Valencia</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// Si no usas FontAwesome, asegúrate de agregarlo a tu proyecto
export default {};
</script>

<style scoped>
.contact {
    background-color: #f8f9fa;
    border-radius: 10px;
}

h2 {
    font-size: 2.5rem;
    color: #333;
}

p {
    font-size: 1.2rem;
    color: #6c757d;
}

.text-muted {
    font-size: 1.1rem;
}

.fas {
    font-size: 1.5rem;
    color: #007bff;
}

@media (max-width: 767px) {
    .contact {
        padding: 3rem 1.5rem;
    }
}
</style>
