(()=>{"use strict";var e=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&e.target.classList.add("info-show-left-right-1")}))})),n=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&e.target.classList.add("info-show-left-right-2")}))})),t=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&e.target.classList.add("info-show-down-up")}))}));document.querySelectorAll(".info-hidden-left-right-1").forEach((function(n){return e.observe(n)})),document.querySelectorAll(".info-hidden-left-right-2").forEach((function(e){return n.observe(e)})),document.querySelectorAll(".info-hidden-down-up").forEach((function(e){return t.observe(e)}));var r=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&e.target.classList.add("project-show")}))}));document.querySelectorAll(".project-hidden").forEach((function(e){return r.observe(e)}))})();