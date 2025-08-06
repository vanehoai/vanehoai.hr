document.addEventListener("DOMContentLoaded", () => {
  const animatedCards = document.querySelectorAll(".animated-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  animatedCards.forEach((card) => {
    observer.observe(card);
  });

  const reservationForm = document.getElementById("reservationForm");
  if (reservationForm) {
    reservationForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;
      const guests = document.getElementById("guests").value;

      if (name && phone && date && time && guests > 0) {
        alert("Đặt bàn thành công! Cảm ơn quý khách.");
        reservationForm.reset();
        window.location.href = "payment.html";
      } else {
        alert("Vui lòng điền đầy đủ thông tin để đặt bàn.");
      }
    });
  }
});

const dishData = {
  "cha-gio-hat-sen": {
    name: "Chả giò hạt sen",
    image: "img/chagiohatsen.jpg",
    price: "70.000 VNĐ",
    description:
      "Món chả giò chay giòn rụm với nhân hạt sen bùi bùi, rau củ thanh mát. Một món khai vị hoàn hảo và hấp dẫn.",
    ingredients: ["Hạt sen", "Khoai môn", "Cà rốt", "Nấm mèo", "Bánh tráng"],
    category: "Món chính",
  },
  "com-chien-trai-thom": {
    name: "Cơm chiên trái thơm",
    image: "img/comchienkhom.jpg",
    price: "95.000 VNĐ",
    description:
      "Món cơm chiên đặc trưng được trình bày trong trái thơm, mang đến hương vị chua ngọt tự nhiên kết hợp với hạt cơm chiên tơi xốp.",
    ingredients: ["Cơm", "Trái thơm", "Đậu que", "Cà rốt", "Nấm"],
    category: "Món chính",
  },
  "mi-nam-quay": {
    name: "Mì nấm quay",
    image: "img/minamquay.jpg",
    price: "80.000 VNĐ",
    description:
      "Sợi mì dai ngon kết hợp cùng các loại nấm được tẩm ướp và quay đậm đà, ăn kèm với rau xà lách tươi.",
    ingredients: ["Mì tươi", "Nấm đùi gà", "Nấm hương", "Nước sốt chay"],
    category: "Món chính",
  },
  "rau-luoc-kho-quet": {
    name: "Rau luộc kho quẹt",
    image: "img/rauluockhoquet.jpg",
    price: "55.000 VNĐ",
    description:
      "Món ăn dân dã, quen thuộc với rau củ luộc thanh đạm chấm cùng nước kho quẹt chay đậm đà, vị mặn ngọt hài hòa.",
    ingredients: ["Rau củ theo mùa", "Nước kho quẹt chay"],
    category: "Món chính",
  },
  "chao-nam-moi-thap-cam": {
    name: "Cháo nấm mối thập cẩm",
    image: "img/chaonammoi.jpg",
    price: "65.000 VNĐ",
    description:
      "Cháo nóng hổi, thơm ngon với nấm mối và nhiều loại rau củ, rất thích hợp cho những ngày mưa.",
    ingredients: ["Gạo", "Nấm mối", "Nấm hương", "Rau củ"],
    category: "Món chính",
  },
  "lau-thai-chay": {
    name: "Lẩu thái chay",
    image: "img/lauthaichay.jpg",
    price: "188.000 VNĐ",
    description:
      "Lẩu Thái chua cay, thanh đạm với nước dùng từ rau củ, ăn kèm bún và các loại nấm tươi.",
    ingredients: ["Nước dùng chay", "Nấm", "Đậu hũ", "Rau cải", "Gia vị thái"],
    category: "Món chính",
  },
  "lau-thao-moc-la-e": {
    name: "Lẩu thảo mộc lá é",
    image: "img/lauthaomoclae.jpg",
    price: "199.000 VNĐ",
    description:
      "Nước lẩu thơm đặc trưng của lá é, kết hợp với các loại thảo mộc, mang đến hương vị thanh khiết và tốt cho sức khỏe.",
    ingredients: ["Lá é", "Nước dùng rau củ", "Đậu hũ", "Rau củ tươi"],
    category: "Món chính",
  },
  "xoi-xoai": {
    name: "Xôi xoài",
    image: "img/xoi-xoai.jpg",
    price: "35.000 VNĐ",
    description:
      "Món tráng miệng truyền thống với xôi nếp dẻo thơm, dừa non và những lát xoài chín ngọt, rưới thêm chút nước cốt dừa béo ngậy.",
    ingredients: ["Xôi nếp", "Xoài chín", "Nước cốt dừa"],
    category: "Tráng miệng",
  },
  "che-long-nhan-hat-sen": {
    name: "Chè long nhãn hạt sen",
    image: "img/che-long-nhan-hat-sen.jpg",
    price: "40.000 VNĐ",
    description:
      "Chè hạt sen thanh mát, ngọt dịu với long nhãn, là món tráng miệng giải nhiệt tuyệt vời.",
    ingredients: ["Hạt sen", "Long nhãn", "Đường phèn"],
    category: "Tráng miệng",
  },
  "nuoc-sam": {
    name: "Nước sâm",
    image: "img/nuoc-sam.jpg",
    price: "25.000 VNĐ",
    description:
      "Thức uống sâm mát lạnh, thanh lọc cơ thể, giúp giải khát và làm dịu cơn khát.",
    ingredients: ["Sâm", "Thảo mộc", "Đường phèn"],
    category: "Nước",
  },
  "tra-vai": {
    name: "Trà vải",
    image: "img/tra-vai.jpg",
    price: "30.000 VNĐ",
    description:
      "Trà vải thơm ngon, ngọt mát, một lựa chọn tuyệt vời để giải nhiệt.",
    ingredients: ["Trà", "Vải tươi", "Đường"],
    category: "Nước",
  },
};

document.addEventListener("DOMContentLoaded", (event) => {
  const movableButton = document.getElementById("movableButton");

  let isDragging = false;
  let offsetX, offsetY;

  if (movableButton) {
    movableButton.addEventListener("mousedown", (e) => {
      isDragging = true;
      offsetX = e.clientX - movableButton.getBoundingClientRect().left;
      offsetY = e.clientY - movableButton.getBoundingClientRect().top;
      movableButton.style.transition = "none"; // Tắt hiệu ứng transition khi di chuyển
    });

    document.addEventListener("mousemove", (e) => {
      if (isDragging) {
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;

        movableButton.style.left = `${x}px`;
        movableButton.style.top = `${y}px`;
      }
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
      movableButton.style.transition = "transform 0.2s ease-in-out";
    });

    // Tối ưu cho thiết bị di động
    movableButton.addEventListener("touchstart", (e) => {
      isDragging = true;
      const touch = e.touches[0];
      offsetX = touch.clientX - movableButton.getBoundingClientRect().left;
      offsetY = touch.clientY - movableButton.getBoundingClientRect().top;
      movableButton.style.transition = "none";
    });

    document.addEventListener("touchmove", (e) => {
      if (isDragging) {
        const touch = e.touches[0];
        const x = touch.clientX - offsetX;
        const y = touch.clientY - offsetY;
        movableButton.style.left = `${x}px`;
        movableButton.style.top = `${y}px`;
      }
    });

    document.addEventListener("touchend", () => {
      isDragging = false;
      movableButton.style.transition = "transform 0.2s ease-in-out";
    });
  }
});
