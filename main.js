const featuresList = [
    {
      icon: "images/download_icon.svg",
      title: "Download App",
      description:
        "Download our app and create a new account (or login with existing one)",
    },
  
  
    {
      icon: "images/collaborations-icon.svg",
      title: "Start Testing",
      description:
        "Test atleast 3 apps (20 credits/app) of other developers to publish your first app",
    },
  
    {
      icon: "images/create-task-icon.svg",
      title: "Add Google Group",
      description:
        "Add the provided Google group link into your closed testing release",
    },
  
    {
      icon: "images/flag_countries.svg",
      title: "Select Countries",
      description:
        "Similarly select all Countries inside closed testing release (save it)",
    },
  
    {
      icon: "images/file-icon.svg",
      title: "Fill Publishing Form",
      description:
        "Fill the publishing form in the app with details and click on publish button",
    },
  
    {
      icon: "images/hurray.svg",
      title: "App Published",
      description:
        "Congrats your app is published and available for other developers to test",
    },
  ];
  
  const testimonialsList = [
    
    {
      review:
        "Being a part of this community has been a game-changer for me. Not only did I fulfill Google Play's testing requirements seamlessly, but I also received constructive criticism for my app.",
        image: "images/testimonial1.png",
        name: "Naaman Kiprono",  
      designation: "Kenyan Developer",
    },
    {
      review:
      "Ever since I joined this platform, I've witnessed a remarkable improvement in the quality of my app. The insightful feedback and rigorous testing from fellow developers have helped me iron out bugs and enhance user experience.",
      image: "images/testimonial2.png",
      name: "Sarah Johnson",
      designation: "Developer and Founder Duho",
    },
    {
      review: 
      "Thanks to this platform, I've found a reliable and efficient way to test my app before its official launch. I couldn't be happier with the results!",
      image: "images/testimonial3.png",
      name: "Emily Davis",
      designation: "Indie Developer and Tester",
    },
  ];
  
  const plans = [
    {
      name: "What is Google Play 20 Testers policy ?",
      features: [
        "According to this policy, Developers should test their app with <strong>20 testers for 14 days continuously </strong> before publishing the app into playstore. (Only for Personal accounts created after Nov 13, 2023)"
      ],
      buttonText: "Google Policy",
      link: "https://support.google.com/googleplay/android-developer/answer/14151465?hl=en"
    },
  
    {
      name: "What is Testers Community ?",
      features: [
        "We are a Community anyone can join. Here instead of paying 20-100 bucks for testers we just test our apps among ourselves. We ensure everyone get 20 testers for Free"
      ],
      buttonText: "Check Steps",
      link: "#features",
    },
  
    // {
    //   name: "Enterprise",
    //   features: [
    //     "All from <strong>Pro</strong> plan",
    //     "Custom Branding",
    //     "API Access",
    //     "Data Export",
    //     "Advanced Security",
    //     "Custom Integrations",
    //   ],
    //   price: "Contact for pricing",
    //   link: "#",
    // },
  ];
  
  const featuresContent = document.querySelector("#features .content");
  const testimonialCard = document.querySelector(
    "#testimonials .testimonial-card"
  );
  const prevBtn = document.querySelector("#testimonials .prev-btn");
  const nextBtn = document.querySelector("#testimonials .next-btn");
  const pricingContent = document.querySelector("#pricing .content");
  const menuIcon = document.querySelector(".menu-icon");
  const mobileNavMenu = document.querySelector(".mobile-nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  let currentTestimonialIndex = 0;
  
  const displayFeatures = () => {
    featuresList.forEach((f) => {
      const html = `<div class="icon">
          <img class="icon_svg" src="${f.icon}" alt="" />
        </div>
        <h3  style="padding-top: 10px; !important">${f.title}</h3>
        <p>
          ${f.description}
        </p>`;
  
      const featureCard = document.createElement("div");
      featureCard.classList.add("feature-card");
      featureCard.innerHTML = html;
  
      featuresContent.appendChild(featureCard);
    });
  };
  
  displayFeatures();
  
  const displayTestimonial = () => {
    const html = `<span class="quote-icon">
    <img src="images/quote-icon.svg" alt="" />
  </span>
  
  <p class="review">
   ${testimonialsList[currentTestimonialIndex].review}
  </p>
  
  <div class="reviewer-info">
    <div class="image">
      <img src="${testimonialsList[currentTestimonialIndex].image}" alt="" />
    </div>
  
    <div class="details">
      <div class="name">${testimonialsList[currentTestimonialIndex].name}</div>
      <div class="designation">${testimonialsList[currentTestimonialIndex].designation}</div>
    </div>
  </div>`;
  
    testimonialCard.innerHTML = html;
    testimonialCard.classList.add("active");
  };
  
  displayTestimonial();
  
  nextBtn.addEventListener("click", () => {
    testimonialCard.classList.remove("active");
  
    setTimeout(() => {
      currentTestimonialIndex++;
      if (currentTestimonialIndex >= testimonialsList.length) {
        currentTestimonialIndex = 0;
      }
      displayTestimonial();
    }, 200);
  });
  
  prevBtn.addEventListener("click", () => {
    testimonialCard.classList.remove("active");
  
    setTimeout(() => {
      currentTestimonialIndex--;
      if (currentTestimonialIndex < 0) {
        currentTestimonialIndex = testimonialsList.length - 1;
      }
      displayTestimonial();
    }, 200);
  });
  
  const displayPricing = () => {
    plans.forEach((p) => {
      const featuresHTML = p.features
        .map(
          (f) =>
            `<li><span class='icon'><img src='images/check-icon.svg'/></span>${f}</li>`
        )
        .join("");
  
      const html = `<h4 class="plan-name">${p.name}</h4>
      <ul class="plan-features">
        ${featuresHTML}
      </ul>
      <a href="${p.link}" class="btn">${p.buttonText}</a>`;
  
      const plan = document.createElement("div");
      plan.classList.add("plan");
      plan.innerHTML = html;
  
      pricingContent.appendChild(plan);
    });
  };
  
  displayPricing();
  
  menuIcon.addEventListener("click", () => {
    mobileNavMenu.classList.toggle("active");
  });
  
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);
  
      if (targetElement) {
        const offset = targetElement.offsetTop - 60;
        window.scrollTo({ top: offset });
      }
  
      mobileNavMenu.classList.remove("active");
    });
  });