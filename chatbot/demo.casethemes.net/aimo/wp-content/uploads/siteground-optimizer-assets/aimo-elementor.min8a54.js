(function(a){"use strict";function m(){var b=typeof elementor!='undefined'?elementor:elementorFrontend;b.hooks.addFilter('pxl_section_start_render',function(b,a,c){return typeof a.pxl_parallax_bg_img!='undefined'&&a.pxl_parallax_bg_img.url!=''&&(b+='<div class="pxl-section-bg-parallax"></div>'),typeof a.pxl_color_offset!='undefined'&&a.pxl_color_offset!='none'&&(b+='<div class="pxl-section-overlay-color"></div>'),typeof a.pxl_overlay_img!='undefined'&&a.pxl_overlay_img.url!=''&&(b+='<div class="pxl-overlay--image pxl-overlay--imageLeft"><div class="bg-image"></div></div>'),typeof a.pxl_overlay_img2!='undefined'&&a.pxl_overlay_img2.url!=''&&(b+='<div class="pxl-overlay--image pxl-overlay--imageRight"><div class="bg-image"></div></div>'),b}),a('.pxl-section-bg-parallax').parent('.elementor-element').addClass('pxl-section-parallax-overflow')}function j(){var a=typeof elementor!='undefined'?elementor:elementorFrontend;a.hooks.addFilter('pxl-custom-column/before-render',function(a,b,c){return typeof b.pxl_column_parallax_bg_img!='undefined'&&b.pxl_column_parallax_bg_img.url!=''&&(a+='<div class="pxl-column-bg-parallax"></div>'),a})}function d(){var b="<style>";a(document).find('.pxl-inline-css').each(function(){var c=a(this);b+=c.attr("data-css")+" ",c.remove()}),b+="</style>",a('head').append(b)}function e(){var a=typeof elementor!='undefined'?elementor:elementorFrontend;a.hooks.addFilter('pxl-custom-section/before-render',function(b,a,c){if(typeof a.row_divider!='undefined'){if(a.row_divider=='angle-top'||a.row_divider=='angle-bottom'||a.row_divider=='angle-top-right'||a.row_divider=='angle-bottom-left')return b='<svg class="pxl-row-angle" style="fill:#ffffff" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100 100" version="1.1" preserveAspectRatio="none" height="130px"><path stroke="" stroke-width="0" d="M0 100 L100 0 L200 100"></path></svg>',b;if(a.row_divider=='angle-top-bottom'||a.row_divider=='angle-top-bottom-left')return b='<svg class="pxl-row-angle pxl-row-angle-top" style="fill:#ffffff" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100 100" version="1.1" preserveAspectRatio="none" height="130px"><path stroke="" stroke-width="0" d="M0 100 L100 0 L200 100"></path></svg><svg class="pxl-row-angle pxl-row-angle-bottom" style="fill:#ffffff" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100 100" version="1.1" preserveAspectRatio="none" height="130px"><path stroke="" stroke-width="0" d="M0 100 L100 0 L200 100"></path></svg>',b;if(a.row_divider=='wave-animation-top'||a.row_divider=='wave-animation-bottom')return b='<svg class="pxl-row-angle" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 150" fill="#fff"><path d="M 0 26.1978 C 275.76 83.8152 430.707 65.0509 716.279 25.6386 C 930.422 -3.86123 1210.32 -3.98357 1439 9.18045 C 2072.34 45.9691 2201.93 62.4429 2560 26.198 V 172.199 L 0 172.199 V 26.1978 Z"><animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z; M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z; M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z; M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z"></animate></path></svg>',b;if(a.row_divider=='curved-top'||a.row_divider=='curved-bottom')return b='<svg class="pxl-row-angle" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1920 128" version="1.1" preserveAspectRatio="none" style="fill:#ffffff"><path stroke-width="0" d="M-1,126a3693.886,3693.886,0,0,1,1921,2.125V-192H-7Z"></path></svg>',b}})}var f=function(b,a){setTimeout(function(){a('.pxl--item').each(function(){var b=a(this).find(".pxl--form-icon"),c=a(this).find('.wpcf7-form-control');c.before(b.clone()),b.remove()})},10)};function g(b){setTimeout(function(){var c=b.find(".pxl-split-text");if(c.length==0)return;gsap.registerPlugin(SplitText),c.each(function(c,b){b.split=new SplitText(b,{type:"lines,words,chars",linesClass:"split-line"}),gsap.set(b,{perspective:400}),a(b).hasClass('split-in-fade')&&(a(b).addClass('active'),gsap.set(b.split.chars,{opacity:0,ease:"Back.easeOut"})),a(b).hasClass('split-in-right')&&gsap.set(b.split.chars,{opacity:0,x:"50",ease:"Back.easeOut"}),a(b).hasClass('split-in-left')&&gsap.set(b.split.chars,{opacity:0,x:"-50",ease:"circ.out"}),a(b).hasClass('split-in-up')&&gsap.set(b.split.chars,{opacity:0,y:"80",ease:"circ.out"}),a(b).hasClass('split-in-down')&&gsap.set(b.split.chars,{opacity:0,y:"-80",ease:"circ.out"}),a(b).hasClass('split-in-rotate')&&gsap.set(b.split.chars,{opacity:0,rotateX:"50deg",ease:"circ.out"}),a(b).hasClass('split-in-scale')&&gsap.set(b.split.chars,{opacity:0,scale:"0.5",ease:"circ.out"}),b.anim=gsap.to(b.split.chars,{scrollTrigger:{trigger:b,toggleActions:"restart pause resume reverse",start:"top 90%"},x:"0",y:"0",rotateX:"0",scale:1,opacity:1,duration:.8,stagger:.02})})},200)}function h(){elementorFrontend.waypoint(a(document).find('.pxl-zoom-point'),function(){var b=a(this).offset(),c=b.top,d=a(window).scrollTop()},{offset:-100,triggerOnce:!0})}function i(){a('.pxl-section-fix-top').length>0&&ScrollTrigger.matchMedia({"(min-width: 991px)":function(){const a=['.pxl-section-fix-top'];a.forEach(a=>{gsap.to(".pxl-section-fix-bottom",{scrollTrigger:{trigger:".pxl-section-fix-bottom",scrub:!0,pin:a,pinSpacing:!1,start:'top bottom',end:"bottom top"}})})}})}function r(c){const a=c.find('.pxl-item--marquee');if(gsap.set(a,{autoAlpha:1}),a.each(function(a,b){gsap.set(b,{xPercent:100*a})}),a.length>2){const c=gsap.utils.wrap(-100,(a.length-1)*100),d=a.data('duration'),e=a.data('slip-type');var b=`-=${a.length*100}`;e=='right'&&(b=`+=${a.length*100}`),gsap.to(a,{xPercent:b,duration:d,repeat:-1,ease:'none',modifiers:{xPercent:a=>c(parseFloat(a))}})}}function k(a){const b=a.find('.pxl-text--marquee'),c=gsap.utils.toArray(b),e=d(c,{paused:!1,repeat:-1});function d(d,e){d=gsap.utils.toArray(d),e=e||{};let a=gsap.timeline({repeat:e.repeat,paused:e.paused,defaults:{ease:"none"},onReverseComplete:()=>a.totalTime(a.rawTime()+a.duration()*100)}),c=d.length,r=d[0].offsetLeft,p=[],h=[],k=[],f=0,l=(e.speed||1)*100,o=e.snap===!1?a=>a:gsap.utils.snap(e.snap||1),n,g,m,i,j,b;gsap.set(d,{xPercent:(a,b)=>{let c=h[a]=parseFloat(gsap.getProperty(b,"width","px"));return k[a]=o(parseFloat(gsap.getProperty(b,"x","px"))/c*100+gsap.getProperty(b,"xPercent")),k[a]}}),gsap.set(d,{x:0}),n=d[c-1].offsetLeft+k[c-1]/100*h[c-1]-r+d[c-1].offsetWidth*gsap.getProperty(d[c-1],"scaleX")+(parseFloat(e.paddingRight)||0);for(b=0;b<c;b++)j=d[b],g=k[b]/100*h[b],m=j.offsetLeft+g-r,i=m+h[b]*gsap.getProperty(j,"scaleX"),a.to(j,{xPercent:o((g-i)/h[b]*100),duration:i/l},0).fromTo(j,{xPercent:o((g-i+n)/h[b]*100)},{xPercent:k[b],duration:(g-i+n-g)/l,immediateRender:!1},i/l).add("label"+b,m/l),p[b]=m/l;function q(b,d){d=d||{},Math.abs(b-f)>c/2&&(b+=b>f?-c:c);let g=gsap.utils.wrap(0,c,b),e=p[g];return e>a.time()!==b>f&&(d.modifiers={time:gsap.utils.wrap(0,a.duration())},e+=a.duration()*(b>f?1:-1)),f=g,d.overwrite=!0,a.tweenTo(e,d)}return a.next=a=>q(f+1,a),a.previous=a=>q(f-1,a),a.current=()=>f,a.toIndex=(a,b)=>q(a,b),a.times=p,a.progress(1,!0).progress(0,!0),e.reversed&&(a.vars.onReverseComplete(),a.reverse()),a}}function l(){let a=document.querySelectorAll(".pxl-scroll-reveal");a.length>0&&window.innerWidth>767&&(gsap.registerPlugin(ScrollTrigger),a.forEach(a=>{let c=a.querySelector("img"),b=gsap.timeline({scrollTrigger:{trigger:a,toggleActions:"play none none none"}});b.set(a,{autoAlpha:1}),b.from(a,{xPercent:-100,duration:1.5,ease:Power2.out}),b.from(c,{xPercent:100,scale:1.3,duration:1.5,delay:-1.5,ease:Power2.out})}))}function b(){const a=document.querySelectorAll(".pxl-process3 .pxl--item");window.innerWidth>960&&(a.forEach((b,c)=>{b.style.left=`${c*120}px`,b.style.top=`${c*52}px`,b.style.position="absolute",b.style.transition="transform 0.3s ease, z-index 0s",b.addEventListener("click",e=>{e.stopPropagation(),a.forEach(a=>{a.style.zIndex="1",a.style.transform="scale(1)";const b=a.querySelector(".pxl-icon");b&&b.classList.remove("pxl_spin");const c=a.querySelector("img");c&&(c.style.borderRadius="12px")}),b.style.zIndex="10",b.style.transform="scale(1.1)";const c=b.querySelector(".pxl-icon");c&&c.classList.add("pxl_spin");const d=b.querySelector("img");d&&(d.style.borderRadius="0px")})}),document.addEventListener("click",()=>{a.forEach(a=>{a.style.zIndex="1",a.style.transform="scale(1)";const b=a.querySelector(".pxl-icon");b&&b.classList.remove("pxl_spin");const c=a.querySelector("img");c&&(c.style.borderRadius="12px")})}))}window.addEventListener("resize",b);function n(){var a=document.querySelectorAll(".pxl-heading .pxl-heading--text-scroll");a.length>0&&a.forEach(a=>{var b=new SplitText(a,{type:'words, chars'});b.words.forEach(a=>{a.children.length>0&&a.children[0].classList.add("first-char")}),gsap.fromTo(b.chars,{position:'relative',display:'inline-block',opacity:.2,x:-5},{opacity:1,x:0,stagger:.1,scrollTrigger:{trigger:a,toggleActions:"play pause reverse pause",start:"top 90%",end:"top 40%",scrub:.7}})})}function o(){let a=0,d=window.scrollY;const e=window.matchMedia("(max-width: 1200px)");let b=!1;function g(){const f=document.querySelector('.pxl-image-split .containers'),c=document.querySelector('.pxl-image-split .pxl-width'),e=document.querySelector('.pxl-image-split .filler-space');if(f&&c&&e){const g=f.getBoundingClientRect().top,h=e.getBoundingClientRect().bottom,i=e.getBoundingClientRect().top,j=c.getBoundingClientRect().top,b=window.scrollY-d;g<=0&&(b>0&&(a=Math.min(100,a+b*.1)),b<0&&h>=window.innerHeight&&(a=Math.max(0,a-Math.abs(b)*.15)),i>=j&&(a=0),c.style.width=a+'%')}d=window.scrollY,b=!1}function f(){b||(b=!0,requestAnimationFrame(g))}function c(){e.matches?window.removeEventListener('scroll',f):window.addEventListener('scroll',f)}function h(){c()}document.querySelector('.pxl-image-split .containers')&&document.querySelector('.pxl-image-split .pxl-width')&&document.querySelector('.pxl-image-split .filler-space')&&(c(),e.addEventListener('change',c),window.addEventListener('resize',h))}function p(){var b=`#ifdef GL_ES
        precision mediump float;
        #endif

        attribute vec3 aVertexPosition;
        attribute vec2 aTextureCoord;

        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;

        uniform mat4 texture0Matrix;
        uniform mat4 texture1Matrix;
        uniform mat4 mapMatrix;

        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord0;
        varying vec2 vTextureCoord1;
        varying vec2 vTextureCoordMap;

        void main() {
            vec3 vertexPosition = aVertexPosition;

            gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

            vTextureCoord0 = (texture0Matrix * vec4(aTextureCoord, 0., 1.)).xy;
            vTextureCoord1 = (texture1Matrix * vec4(aTextureCoord, 0., 1.)).xy;
            vTextureCoordMap = (mapMatrix * vec4(aTextureCoord, 0., 1.)).xy;
            vVertexPosition = vertexPosition;
        }`,c=`#ifdef GL_ES
        precision mediump float;
        #endif

        #define PI2 6.28318530718
        #define PI 3.14159265359
        #define S(a,b,n) smoothstep(a,b,n)

        uniform float uTime;
        uniform float uProgress;
        uniform vec2 uReso;
        uniform vec2 uMouse;

        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord0;
        varying vec2 vTextureCoord1;
        varying vec2 vTextureCoordMap;

        uniform sampler2D texture0;
        uniform sampler2D texture1;
        uniform sampler2D map;

        float exponentialEasing (float x, float a){

            float epsilon = 0.00001;
            float min_param_a = 0.0 + epsilon;
            float max_param_a = 1.0 - epsilon;
            a = max(min_param_a, min(max_param_a, a));

            if (a < 0.5){
                a = 2.0 * a;
                float y = pow(x, a);
                return y;
            } else {
                a = 2.0 * (a-0.5);
                float y = pow(x, 1.0 / (1.-a));
                return y;
            }
        }

        vec4 blur13(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
            vec4 color = vec4(0.0);
            vec2 off1 = vec2(1.411764705882353) * direction;
            vec2 off2 = vec2(3.2941176470588234) * direction;
            vec2 off3 = vec2(5.176470588235294) * direction;
            color += texture2D(image, uv) * 0.1964825501511404;
            color += texture2D(image, uv + (off1 / resolution)) * 0.2969069646728344;
            color += texture2D(image, uv - (off1 / resolution)) * 0.2969069646728344;
            color += texture2D(image, uv + (off2 / resolution)) * 0.09447039785044732;
            color += texture2D(image, uv - (off2 / resolution)) * 0.09447039785044732;
            color += texture2D(image, uv + (off3 / resolution)) * 0.010381362401148057;
            color += texture2D(image, uv - (off3 / resolution)) * 0.010381362401148057;
            return color;
        }

        void main(){
            vec2 uv0 = vTextureCoord0;
            vec2 uv1 = vTextureCoord1;

            float progress0 = uProgress;
            float progress1 = 1. - uProgress;

            vec4 map = blur13(map, vTextureCoordMap, uReso, vec2(2.)) + 0.5;

            uv0.x += progress0 * map.r;
            uv1.x -= progress1 * map.r;

            vec4 color = texture2D( texture0, uv0 );
            vec4 color1 = texture2D( texture1, uv1 );

            gl_FragColor = mix(color, color1, progress0 );
        }`,e,f;class d{constructor(a){this.canvas=a.canvas,this.webGLCurtain=new Curtains({container:this.canvas,watchScroll:!1,pixelRatio:Math.min(1.5,window.devicePixelRatio)}),this.planeElement=a.planeElement,this.mouse={x:0,y:0},this.params={vertexShader:b,fragmentShader:c,widthSegments:40,heightSegments:40,uniforms:{time:{name:"uTime",type:"1f",value:0},mousepos:{name:"uMouse",type:"2f",value:[0,0]},resolution:{name:"uReso",type:"2f",value:[innerWidth,innerHeight]},progress:{name:"uProgress",type:"1f",value:0}}},this.initPlane()}initPlane(){this.plane=this.webGLCurtain.addPlane(this.planeElement,this.params),this.plane&&this.plane.onReady(()=>{this.update(),this.initEvent()})}update(){this.plane.onRender(()=>{this.plane.uniforms.time.value+=.01,this.plane.uniforms.resolution.value=[innerWidth,innerHeight]})}initEvent(){this.planeElement.addEventListener("mouseenter",a=>{gsap.to(this.plane.uniforms.progress,.8,{value:1})}),this.planeElement.addEventListener("mouseout",a=>{gsap.to(this.plane.uniforms.progress,.8,{value:0})})}}(navigator.userAgent.indexOf('Safari')==-1||navigator.userAgent.indexOf('Chrome')>-1)&&a('.pxl-image-effect1.normal').each(function(){const b=a(this),c=b.find('.canvas')[0],e=b.find('.item--image')[0],f=b.data('initialized');!f&&c&&e&&(new d({canvas:c,planeElement:e}),b.data('initialized',!0))}),e=`#ifdef GL_ES
        precision mediump float;
        #endif

        attribute vec3 aVertexPosition;
        attribute vec2 aTextureCoord;

        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;

        varying vec2 vTextureCoord;

        void main() {
            gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);

            vTextureCoord = aTextureCoord;
        }`,f=`
        #ifdef GL_ES
        precision mediump float;
        #endif

        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;

        uniform float uTime;

        uniform sampler2D planeTexture;

        void main() {
            vec2 textureCoord = vTextureCoord;

            const float PI = 3.141592;

            textureCoord.x += (
            sin(textureCoord.x * 2.5 + ((uTime * (PI / 3.0)) * 0.031))
            + sin(textureCoord.y * 2.5 + ((uTime * (PI / 2.489)) * 0.017))
            ) * 0.0075;

            textureCoord.y += (
            sin(textureCoord.y * 2.5 + ((uTime * (PI / 2.023)) * 0.023))
            + sin(textureCoord.x * 2.5 + ((uTime * (PI / 3.1254)) * 0.037))
            ) * 0.0125;

            gl_FragColor = texture2D(planeTexture, textureCoord);
        }
        `;class g{constructor(a){this.canvas=a.canvas,this.webGLCurtain=new Curtains({container:this.canvas,watchScroll:!1,pixelRatio:Math.min(1.5,window.devicePixelRatio)}),this.planeElement=a.planeElement,this.mouse={x:0,y:0},this.params={vertexShader:e,fragmentShader:f,widthSegments:40,heightSegments:40,uniforms:{time:{name:"uTime",type:"1f",value:0},mousepos:{name:"uMouse",type:"2f",value:[0,0]},resolution:{name:"uReso",type:"2f",value:[innerWidth,innerHeight]},progress:{name:"uProgress",type:"1f",value:0}}},this.initPlane()}initPlane(){this.plane=this.webGLCurtain.addPlane(this.planeElement,this.params),this.plane&&this.plane.onReady(()=>{this.update(),this.initEvent()})}update(){this.plane.onRender(()=>{this.plane.uniforms.resolution.value=[innerWidth,innerHeight]})}initEvent(){let a=!1;this.planeElement.addEventListener("mouseenter",b=>{a=!0}),this.planeElement.addEventListener("mouseout",b=>{a=!1}),this.plane.onRender(()=>{a&&this.plane.uniforms.time.value++})}}(navigator.userAgent.indexOf('Safari')==-1||navigator.userAgent.indexOf('Chrome')>-1)&&a('.pxl-image-effect1.expo').each(function(){const b=a(this),c=b.find('.canvas')[0],d=b.find('.item--image')[0],e=b.data('initialized');!e&&c&&d&&(new g({canvas:c,planeElement:d}),b.data('initialized',!0))});const h=`
        precision mediump float;

        attribute vec3 aVertexPosition;
        attribute vec2 aTextureCoord;

        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;

        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;

        uniform float uTime;

        void main() {
            vec3 vertexPosition = aVertexPosition;

            float waveCoords = ((uTime / 45.0) * 3.5) - 1.75;

            float distanceToWave = distance(vec2(vertexPosition.x, 0.0), vec2(waveCoords, 0.0));

            vertexPosition.z -= (cos(clamp(distanceToWave, 0.0, 0.75) * 3.141592) - cos(0.75 * 3.141592) + (2.0 * sin(3.141592 * uTime / 90.0))) * 0.025;

            gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

            vTextureCoord = aTextureCoord;
            vVertexPosition = vertexPosition;
        }
        `,i=`precision mediump float;

        uniform float uTime;

        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;

        uniform sampler2D uExample;


        void main() {

            vec2 textureCoords = vec2(vTextureCoord.x, vTextureCoord.y);
            vec4 finalColor = texture2D(uExample, textureCoords);

            gl_FragColor = finalColor;
        }`;class j{constructor(a){this.canvas=a.canvas,this.webGLCurtain=new Curtains({container:this.canvas,watchScroll:!1,pixelRatio:Math.min(1.5,window.devicePixelRatio)}),this.planeElement=a.planeElement,this.mouse={x:0,y:0},this.params={vertexShader:h,fragmentShader:i,widthSegments:40,heightSegments:40,uniforms:{time:{name:"uTime",type:"1f",value:0},resolution:{name:"uReso",type:"2f",value:[innerWidth,innerHeight]}}},this.initPlane()}initPlane(){this.plane=this.webGLCurtain.addPlane(this.planeElement,this.params),this.plane&&this.plane.onReady(()=>{this.update(),this.initEvent()})}update(){this.plane.onRender(()=>{this.plane.uniforms.time.value+=.01,this.plane.uniforms.resolution.value=[innerWidth,innerHeight]})}initEvent(){let a=!1;this.planeElement.addEventListener("mouseenter",b=>{a=!0}),this.planeElement.addEventListener("mouseout",b=>{a=!1}),this.plane.onRender(()=>{a?this.plane.uniforms.time.value+=(45-this.plane.uniforms.time.value)*.0375:this.plane.uniforms.time.value+=(0-this.plane.uniforms.time.value)*.0375})}}(navigator.userAgent.indexOf('Safari')==-1||navigator.userAgent.indexOf('Chrome')>-1)&&a('.pxl-image-effect1.wave').each(function(){const b=a(this),c=b.find('.canvas')[0],d=b.find('.item--image')[0],e=b.data('initialized');!e&&c&&d&&(new j({canvas:c,planeElement:d}),b.data('initialized',!0))}),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&a('.pxl-image-effect1 .image-front').css('opacity','1')}function q(){const a=document.querySelectorAll('.animate-on-scroll');window.innerWidth>991&&a.length>0&&a.forEach(function(a){gsap.fromTo(a,{transform:'translateY(200px)',opacity:0},{transform:'translateY(0)',opacity:1,duration:1.15,ease:'power2.out',scrollTrigger:{trigger:a,start:'top bottom',toggleActions:'play none none none'}})})}function c(){const a=document.querySelectorAll('.pxl---text-scroll');a.length>0&&a.forEach(function(a){const b=new SplitText(a,{type:"words,chars"}),c=b.chars;gsap.fromTo(c,{filter:'blur(10px) brightness(30%)',willChange:'filter'},{filter:'blur(0px) brightness(100%)',ease:'none',stagger:.05,scrollTrigger:{trigger:a,start:'top bottom-=15%',end:'bottom center+=15%',scrub:.2}})})}a(window).on('elementor/frontend/init',function(){m(),j(),d(),e(),h(),i(),l(),b(),n(),o(),p(),q(),c(),elementorFrontend.hooks.addAction('frontend/element_ready/pxl_contact_form.default',f),elementorFrontend.hooks.addAction('frontend/element_ready/pxl_heading.default',function(a){g(a)}),elementorFrontend.hooks.addAction('frontend/element_ready/pxl_text_marquee.default',function(a){k(a)})})})(jQuery)