module.exports = function (data, title, description, tagSet, imgUrls) {

	const navItems = data.site.nav;
	let navHtml = "";
	for (const [key, value] of Object.entries(navItems)) {
		navHtml += `<li><a href="#${value}">${key}</a></li>`;
	}
	return /*html*/ `<!-- Nav Block -->
	<nav>
		<!-- <span class="logo">Alfalfa</span> -->
		<ul>
			${navHtml}
		</ul>
	</nav>
	<script type="application/javascript">
		console.log("current path", window.location.pathname);
		if (window.location.pathname !== "/") {
			const navLinks = document.querySelectorAll("nav ul");
			navLinks[0].innerHTML = '<li><a href="/">Home</a></li>' + navLinks[0].innerHTML;
			navLinks[0].querySelectorAll("li").forEach(liItem => {
				const link = liItem.querySelector("a");
				if (link.getAttribute("href") === window.location.pathname) {
					liItem.classList.add("active");
					// .style.display = "none";
					//classList.add("active");
				}
			});
		}
	</script>
	<div class="theme-selector">
	          <ul>
                  <li class="theme-one current">
                      <button class="theme-selector-btn" data-theme="one">
                          <span>1</span>
                          <span class="swatches">
                              <span class="background"></span>
                              <span class="background-muted"></span>
                              <span class="foreground"></span>
                              <span class="foreground-muted"></span>
                              <span class="accent"></span>
                          </span>
                      </button>
                  </li>
                  <li class="theme-two">
                      <button class="theme-selector-btn" data-theme="two">
                          <span>2</span>
                          <span class="swatches">
                              <span class="background"></span>
                              <span class="background-muted"></span>
                              <span class="foreground"></span>
                              <span class="foreground-muted"></span>
                              <span class="accent"></span>
                          </span>
                      </button>
                  </li>
                  <li class="theme-three">
                      <button class="theme-selector-btn" data-theme="three">
                          <span>3</span>
                          <span class="swatches">
                              <span class="background"></span>
                              <span class="background-muted"></span>
                              <span class="foreground"></span>
                              <span class="foreground-muted"></span>
                              <span class="accent"></span>
                          </span>
                      </button>
                  </li>        
<li class="theme-four">
                      <button class="theme-selector-btn" data-theme="four">
                          <span>4</span>
                          <span class="swatches">
                              <span class="background"></span>
                              <span class="background-muted"></span>
                              <span class="foreground"></span>
                              <span class="foreground-muted"></span>
                              <span class="accent"></span>
                          </span>
                      </button>
                  </li>   
            <li class="theme-five">
                      <button class="theme-selector-btn" data-theme="five">
                          <span>5</span>
                          <span class="swatches">
                              <span class="background"></span>
                              <span class="background-muted"></span>
                              <span class="foreground"></span>
                              <span class="foreground-muted"></span>
                              <span class="accent"></span>
                          </span>
                      </button>
                  </li>
            <li class="theme-six">
                      <button class="theme-selector-btn" data-theme="six">
                          <span>6</span>
                          <span class="swatches">
                              <span class="background"></span>
                              <span class="background-muted"></span>
                              <span class="foreground"></span>
                              <span class="foreground-muted"></span>
                              <span class="accent"></span>
                          </span>
                      </button>
                  </li>
            <li class="theme-seven">
                      <button class="theme-selector-btn" data-theme="seven">
                          <span>7</span>
                          <span class="swatches">
                              <span class="background"></span>
                              <span class="background-muted"></span>
                              <span class="foreground"></span>
                              <span class="foreground-muted"></span>
                              <span class="accent"></span>
                          </span>
                      </button>
                  </li>            
          </ul>
	</div>
`;
}
