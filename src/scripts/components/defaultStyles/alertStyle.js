export const alertStyle = `
<style>
      @keyframes show {
        from {
          transform: translate(-50%, 0) scale(0.1);
          opacity:0;
        }
        to {
          opacity:1;
          transform: translate(-50%, 0);
        }
      }
      * {
        box-sizing: border-box;        
      }
      #alert-wrapper {
        pointer-events: fill;
        cursor: wait;
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 100;
        opacity: 1;
        transition: 0.5s;
        background-color: rgba(0, 0, 0, 0.5);
        top: 0;
        left: 0;

    
      }
      #alert-box {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 0);

        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;        
        animation: show 0.3s;
        padding: 1rem;
        border: 2px red solid;
        width: min(90%,500px,fit-content);
        text-align: center;
        background: white;
        border-radius: 5px;
      }
    
    </style>`;
