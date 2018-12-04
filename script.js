    const sideNav = document.querySelector('.sidenav');
    M.Sidenav.init(sideNav, {});

    const slider = document.querySelector('.slider');
    M.Slider.init(slider, {
        indicators: false,
        height: 500,
        transition: 500,
        interval: 6000
      });

    const ss = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(ss, {});

    const mb = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(mb, {});

    const ac = document.querySelector('.autocomplete');
    M.Autocomplete.init(ac, {
        data: {
          "Miami": null,
          "Mexico": null,
          "Hawaii": null,
          "Florida": null,
          "California": null,
          "Jamaica": null,
          "Europe": null,
          "Paris": null,
        }
      });