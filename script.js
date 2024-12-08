// گرفتن المان‌های موردنیاز
const galleryItems = document.querySelectorAll(".gallery-item");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.getElementById("close-modal");

// باز کردن مودال با کلیک روی یک تصویر
galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    modal.style.display = "flex"; // نمایش مودال
    modalImage.src = item.src; // تنظیم تصویر مودال به تصویر کلیک‌شده
    modalImage.alt = item.alt; // تنظیم متن جایگزین (alt)
  });
});

// بستن مودال با کلیک روی دکمه ×
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// بستن مودال با کلیک روی فضای بیرونی مودال
modal.addEventListener("click", (e) => {
  if (e.target === modal) { // بررسی اینکه کلیک روی پس‌زمینه مودال بوده
    modal.style.display = "none";
  }
});
