window.RevealCodewindow = function () {
  return {
    id: "RevealCodewindow",
    init: function(deck) {
      initCodewindow(deck);
    }
  };
};


const initCodewindow = function(Reveal) {
  
  const svg_buttons = `<svg viewBox="0 0 420 100" style="width:55px"><circle fill="#ff5f57" cx="50" cy="50" r="50"/><circle fill="#febc2e" cx="210" cy="50" r="50"/><circle fill="#28c840" cx="370" cy="50" r="50"/></svg>`
  
  const svg_sass = `<svg viewBox="0 0 512 384" style="height:1em"><path fill="#CF649A" d="M440.6 220.6c-17.9.1-33.4 4.4-46.4 10.8-4.8-9.5-9.6-17.8-10.4-24-.9-7.2-2-11.6-.9-20.2s6.1-20.8 6.1-21.8c-.1-.9-1.1-5.3-11.4-5.4-10.3-.1-19.2 2-20.2 4.7s-3 8.9-4.3 15.3c-1.8 9.4-20.6 42.7-31.3 60.2-3.5-6.8-6.5-12.8-7.1-17.6-.9-7.2-2-11.6-.9-20.2s6.1-20.8 6.1-21.8c-.1-.9-1.1-5.3-11.4-5.4-10.3-.1-19.2 2-20.2 4.7s-2.1 9.1-4.3 15.3c-2.1 6.2-27.1 61.8-33.6 76.3-3.3 7.4-6.2 13.3-8.3 17.3s-.1.3-.3.7c-1.8 3.4-2.8 5.3-2.8 5.3v.1c-1.4 2.5-2.9 4.9-3.6 4.9-.5 0-1.5-6.7.2-15.9 3.7-19.3 12.7-49.4 12.6-50.5 0-.5 1.7-5.8-5.8-8.5-7.3-2.7-9.9 1.8-10.5 1.8-.6 0-1.1 1.6-1.1 1.6s8.1-33.9-15.5-33.9c-14.8 0-35.2 16.1-45.3 30.8-6.4 3.5-20 10.9-34.4 18.8-5.5 3-11.2 6.2-16.6 9.1l-1.1-1.2c-28.6-30.5-81.5-52.1-79.3-93.1.8-14.9 6-54.2 101.6-101.8 78.3-39 141-28.3 151.9-4.5 15.5 34-33.5 97.2-114.9 106.3-31 3.5-47.3-8.5-51.4-13-4.3-4.7-4.9-4.9-6.5-4-2.6 1.4-1 5.6 0 8.1 2.4 6.3 12.4 17.5 29.4 23.1 14.9 4.9 51.3 7.6 95.3-9.4 49.3-19.1 87.8-72.1 76.5-116.4-11.5-45.1-86.3-59.9-157-34.8-42.1 15-87.7 38.4-120.5 69.1C4 117.9-2.2 149.7.4 162.9c9.1 47.1 74 77.8 100 100.5-1.3.7-2.5 1.4-3.6 2-13 6.4-62.5 32.3-74.9 59.7-14 31 2.2 53.3 13 56.3 33.4 9.3 67.6-7.4 86.1-34.9 18.4-27.5 16.2-63.2 7.7-79.5l-.3-.6 10.2-6c6.6-3.9 13.1-7.5 18.8-10.6-3.2 8.7-5.5 19-6.7 34-1.4 17.6 5.8 40.4 15.3 49.4 4.2 3.9 9.2 4 12.3 4 11 0 16-9.1 21.5-20 6.8-13.3 12.8-28.7 12.8-28.7s-7.5 41.7 13 41.7c7.5 0 15-9.7 18.4-14.7v.1s.2-.3.6-1c.8-1.2 1.2-1.9 1.2-1.9v-.2c3-5.2 9.7-17.1 19.7-36.8 12.9-25.4 25.3-57.2 25.3-57.2s1.2 7.8 4.9 20.6c2.2 7.6 7 15.9 10.7 24-3 4.2-4.8 6.6-4.8 6.6l.1.1c-2.4 3.2-5.1 6.6-7.9 10-10.2 12.2-22.4 26.1-24 30.1-1.9 4.7-1.5 8.2 2.2 11 2.7 2 7.5 2.4 12.6 2 9.2-.6 15.6-2.9 18.8-4.3 5-1.8 10.7-4.5 16.2-8.5 10-7.4 16.1-17.9 15.5-31.9-.3-7.7-2.8-15.3-5.9-22.5.9-1.3 1.8-2.6 2.7-4 15.8-23.1 28-48.5 28-48.5s1.2 7.8 4.9 20.6c1.9 6.5 5.7 13.6 9.1 20.6-14.8 12.1-24.1 26.1-27.3 35.3-5.9 17-1.3 24.7 7.4 26.5 3.9.8 9.5-1 13.7-2.8 5.2-1.7 11.5-4.6 17.3-8.9 10-7.4 19.6-17.7 19.1-31.6-.3-6.4-2-12.7-4.3-18.7 12.6-5.2 28.9-8.2 49.6-5.7 44.5 5.2 53.3 33 51.6 44.6-1.7 11.6-11 18-14.1 20-3.1 1.9-4.1 2.6-3.8 4 .4 2.1 1.8 2 4.5 1.6 3.7-.6 23.4-9.5 24.2-30.9 1.2-27.5-24.9-57.5-71.2-57.2zM97.4 336.3c-14.7 16.1-35.4 22.2-44.2 17-9.5-5.5-5.8-29.2 12.3-46.3 11-10.4 25.3-20 34.7-25.9 2.1-1.3 5.3-3.2 9.1-5.5.6-.4 1-.6 1-.6.7-.4 1.5-.9 2.3-1.4 6.7 24.4.3 45.8-15.2 62.7zm107.5-73.1c-5.1 12.5-15.9 44.6-22.4 42.8-5.6-1.5-9-25.8-1.1-49.8 4-12.1 12.5-26.5 17.5-32.1 8.1-9 16.9-12 19.1-8.3 2.6 4.8-9.9 39.6-13.1 47.4zm88.7 42.4c-2.2 1.1-4.2 1.9-5.1 1.3-.7-.4.9-1.9.9-1.9s11.1-11.9 15.5-17.4c2.5-3.2 5.5-6.9 8.7-11.1v1.2c0 14.4-13.8 24-20 27.9zM362 290c-1.6-1.2-1.4-4.9 4-16.5 2.1-4.6 6.9-12.3 15.2-19.6 1 3 1.6 5.9 1.5 8.6-.1 18-12.9 24.7-20.7 27.5z"/></svg>`

  const svg_r = `<svg viewBox="0 0 724 561" style = "height: 1em;"><defs><linearGradient id="gradientFill-1" x1="0" x2="1" y1="0" y2="1" gradientUnits="objectBoundingBox" spreadMethod="pad"><stop offset="0" stop-color="rgb(203,206,208)" stop-opacity="1"/><stop offset="1" stop-color="rgb(132,131,139)" stop-opacity="1"/></linearGradient><linearGradient id="gradientFill-2" x1="0" x2="1" y1="0" y2="1" gradientUnits="objectBoundingBox" spreadMethod="pad"><stop offset="0" stop-color="rgb(39,109,195)" stop-opacity="1"/><stop offset="1" stop-color="rgb(22,92,170)" stop-opacity="1"/></linearGradient></defs><path d="M361.453,485.937 C162.329,485.937 0.906,377.828 0.906,244.469 C0.906,111.109 162.329,3.000 361.453,3.000 C560.578,3.000 722.000,111.109 722.000,244.469 C722.000,377.828 560.578,485.937 361.453,485.937 ZM416.641,97.406 C265.289,97.406 142.594,171.314 142.594,262.484 C142.594,353.654 265.289,427.562 416.641,427.562 C567.992,427.562 679.687,377.033 679.687,262.484 C679.687,147.971 567.992,97.406 416.641,97.406 Z" fill="url(#gradientFill-1)" fill-rule="evenodd"/><path d="M550.000,377.000 C550.000,377.000 571.822,383.585 584.500,390.000 C588.899,392.226 596.510,396.668 602.000,402.500 C607.378,408.212 610.000,414.000 610.000,414.000 L696.000,559.000 L557.000,559.062 L492.000,437.000 C492.000,437.000 478.690,414.131 470.500,407.500 C463.668,401.969 460.755,400.000 454.000,400.000 C449.298,400.000 420.974,400.000 420.974,400.000 L421.000,558.974 L298.000,559.026 L298.000,152.938 L545.000,152.938 C545.000,152.938 657.500,154.967 657.500,262.000 C657.500,369.033 550.000,377.000 550.000,377.000 ZM496.500,241.024 L422.037,240.976 L422.000,310.026 L496.500,310.002 C496.500,310.002 531.000,309.895 531.000,274.877 C531.000,239.155 496.500,241.024 496.500,241.024 Z" fill="url(#gradientFill-2)" fill-rule="evenodd"/></svg>`
  
  const svg_python = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style = "height: 1em; width: 1em;"><defs><linearGradient id="A" x1="811.527" y1="574.895" x2="665.255" y2="573.732" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#366a96"/><stop offset="1" stop-color="#3679b0"/></linearGradient><linearGradient id="B" x1="862.824" y1="642.176" x2="573.276" y2="642.176" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffc836"/><stop offset="1" stop-color="#ffe873"/></linearGradient></defs><g transform="matrix(.1617 0 0 .158089 -107.53764 -81.66187)"><path d="M716.255 544.487c0-13.623 3.653-21.034 23.822-24.563 13.693-2.4 31.25-2.7 47.627 0 12.935 2.135 23.822 11.77 23.822 24.563v44.945c0 13.182-10.57 23.98-23.822 23.98h-47.627c-16.164 0-29.787 13.782-29.787 29.363v21.564h-16.376c-13.852 0-21.917-9.988-25.305-23.964-4.57-18.776-4.376-29.963 0-47.945 3.794-15.687 15.917-23.964 29.77-23.964h65.52v-6h-47.645v-17.98z" fill="url(#A)"/><path d="M811.527 688.32c0 13.623-11.823 20.523-23.822 23.964-18.052 5.188-32.54 4.394-47.627 0-12.6-3.67-23.822-11.17-23.822-23.964v-44.945c0-12.935 10.782-23.98 23.822-23.98h47.627c15.864 0 29.787-13.71 29.787-29.963v-20.964h17.858c13.87 0 20.4 10.305 23.822 23.964 4.764 18.97 4.976 33.157 0 47.945-4.817 14.364-9.97 23.964-23.822 23.964H763.9v6h47.627v17.98z" fill="url(#B)"/><path d="M728.166 541.505c0-4.976 3.988-9 8.93-9 4.923 0 8.93 4.023 8.93 9 0 4.96-4.006 8.982-8.93 8.982-4.94 0-8.93-4.023-8.93-8.982zm53.59 149.798c0-4.96 4.006-8.982 8.93-8.982 4.94 0 8.93 4.023 8.93 8.982 0 4.976-3.988 9-8.93 9-4.923 0-8.93-4.023-8.93-9z" fill="#fff"/></g></svg>`
  
  const svg_html = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height:1em"><path fill="#E44D26" d="M107.644 470.877 74.633 100.62h362.734l-33.046 370.199L255.778 512z"/><path fill="#F16529" d="m256 480.523 120.03-33.277 28.24-316.352H256z"/><path fill="#EBEBEB" d="M256 268.217h-60.09l-4.15-46.501H256v-45.411H142.132l1.087 12.183 11.161 125.139H256zm0 117.936-.199.053-50.574-13.656-3.233-36.217h-45.585l6.362 71.301 93.02 25.823.209-.058z"/><path d="M108.382 0h23.077v22.8h21.11V0h23.078v69.044H152.57v-23.12h-21.11v23.12h-23.077V0zm97.612 22.896h-20.316V0h63.72v22.896h-20.325v46.148h-23.078V22.896zM259.511 0h24.063l14.802 24.26L313.163 0h24.072v69.044h-22.982V34.822l-15.877 24.549h-.397l-15.888-24.549v34.222h-22.58V0zm89.209 0h23.084v46.222h32.453v22.822H348.72V0z"/><path fill="#FFF" d="M255.843 268.217v45.41h55.918l-5.271 58.894-50.647 13.67v47.244l93.094-25.801.683-7.672 10.671-119.551 1.108-12.194h-12.237zm0-91.912v45.411h109.688l.911-10.207 2.069-23.021 1.086-12.183z"/></svg>`
  
  const svg_css = `<svg xmlns="http://www.w3.org/2000/svg" style="height:1em" viewBox="0 0 362.734 512"><path style="fill:#264de4" d="m437.367 100.62-33.046 370.199L255.778 512l-148.134-41.123L74.633 100.62z" transform="translate(-74.633)"/><path style="fill:#2965f1" d="m376.03 447.246 28.24-316.352H256v349.629z" transform="translate(-74.633)"/><path style="fill:#ebebeb" d="m150.31 268.217 4.07 45.41H256v-45.41zM256 176.305H142.132l4.128 45.411H256zm0 257.094v-47.246l-.199.053-50.574-13.656-3.233-36.217h-45.585l6.362 71.301 93.02 25.823z" transform="translate(-74.633)"/><path d="M85.367 0h55v23h-32v23h32v23h-55zm66 0h55v20h-32v4h32v46h-55V49h32v-4h-32zm66 0h55v20h-32v4h32v46h-55V49h32v-4h-32z"/><path style="fill:#fff" d="m311.761 313.627-5.271 58.894-50.647 13.67v47.244l93.094-25.801.683-7.672 10.671-119.551 1.108-12.194 8.198-91.912H255.843v45.411h63.988l-4.132 46.501h-59.856v45.41z" transform="translate(-74.633)"/></svg>`
  
  const svg_js = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: #edc624;"><path d="M208 88.001h-80v212.498c0 52.58-18.032 67.261-49.412 67.261-14.705 0-27.948-2.521-38.25-6.063L32 423.904C46.7 428.966 69.259 432 86.907 432 158.955 432 208 398.129 208 301.02V88.001zM382.463 80C305.02 80 256 123.998 256 182.154c0 50.083 37.751 81.44 92.641 101.665 39.7 14.158 55.392 26.808 55.392 47.539 0 22.756-18.139 37.425-52.448 37.425-31.863 0-60.789-10.64-80.394-21.255v-.021L256 410.727c18.639 10.638 53.441 21.255 91.167 21.255C437.854 431.98 480 383.43 480 326.284c0-48.55-26.958-79.9-85.278-102.163-43.139-17.191-61.27-26.795-61.27-48.542 0-17.2 15.688-32.869 48.043-32.869 31.846 0 53.744 10.707 66.505 17.291l19.125-64C447.125 87.22 420.188 80 382.463 80z"></path></svg>`
  
  const svg_quarto = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121.8 118.8" xml:space="preserve" style="height:1em"><path d="M56 54.4V1.5C27.9 3.5 5.6 26.2 4.1 54.4H56zm7 0h52.9C114.4 25.9 91.5 3 63 1.5v52.9zm-7 7H4.2c2 27.7 24.1 49.9 51.8 51.8V61.4zm7 0v51.9c28.2-1.5 50.9-23.8 52.8-51.9H63z" fill-rule="evenodd" clip-rule="evenodd" fill="#74AADB"/></svg>`
  
  const svg_julia = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 325 300" style="height:1em"><path style="stroke:none;fill-rule:nonzero;fill:#cb3c33;fill-opacity:1" d="M150.898 225c0 41.422-33.578 75-75 75-41.421 0-75-33.578-75-75s33.579-75 75-75c41.422 0 75 33.578 75 75"/><path style="stroke:none;fill-rule:nonzero;fill:#389826;fill-opacity:1" d="M237.5 75c0 41.422-33.578 75-75 75s-75-33.578-75-75 33.578-75 75-75 75 33.578 75 75"/><path style="stroke:none;fill-rule:nonzero;fill:#9558b2;fill-opacity:1" d="M324.102 225c0 41.422-33.579 75-75 75-41.422 0-75-33.578-75-75s33.578-75 75-75c41.421 0 75 33.578 75 75"/></svg>`
  
  window.addEventListener( 'ready', function(event) {

    var content;
    var new_content;
    var empty_file;

    // Remove configured margin of the presentation
    var codewindows = document.getElementsByClassName("codewindow");
  
    for (var i = 0; i < codewindows.length; i++) {
      content = codewindows[i];
      
      empty_file = true;
      
      new_content = document.createElement("div");
      new_content.classList.add("codewindow");
      
      header = document.createElement("div");
      header.classList.add("header");
      header.innerHTML = svg_buttons;
      
      file = document.createElement("div");
      
      file.classList.add("file");
      if (content.classList.contains("sass")) {
        file.innerHTML += svg_sass;
        empty_file = false;
      }
      if (content.classList.contains("r")) {
        file.innerHTML += svg_r;
        empty_file = false;
      }
      if (content.classList.contains("python")) {
        file.innerHTML += svg_python;
        empty_file = false;
      }
      if (content.classList.contains("html")) {
        file.innerHTML += svg_html;
        empty_file = false;
      }
      if (content.classList.contains("css")) {
        file.innerHTML += svg_css;
        empty_file = false;
      }
      if (content.classList.contains("js")) {
        file.innerHTML += svg_js;
        empty_file = false;
      }
      if (content.classList.contains("quarto")) {
        file.innerHTML += svg_quarto;
        empty_file = false;
      }
      if (content.classList.contains("julia")) {
        file.innerHTML += svg_julia;
        empty_file = false;
      }
      
      file_name = content.querySelector("p");
      if (file_name !== null) {
        file.innerHTML += file_name.innerText;
        empty_file = false;
      }
      
      textarea = document.createElement("div");
      textarea.classList.add("textarea");
      textarea.appendChild(content.querySelector("div,iframe"));
      
      if (!empty_file) {
        header.appendChild(file);
      }

      new_content.appendChild(header);
      new_content.appendChild(textarea);
      
      codewindows[i].innerHTML = new_content.innerHTML;
      
      if (content.attributes.width !== undefined) {
        codewindows[i].style.width = content.attributes.width.value;
      }
    }
  });
};