document.addEventListener("DOMContentLoaded", function () {
    const features = document.querySelectorAll(".feature1");

    features.forEach(feature => {
        feature.addEventListener("click", function () {
            toggleFeature(this, features);
        });
    });
});

function toggleFeature(element, allFeatures) {
    let isActive = element.classList.contains("active");

    // Cierra todas las demás características antes de abrir una nueva
    allFeatures.forEach(f => f.classList.remove("active"));

    if (!isActive) {
        element.classList.add("active");
    }
}


