import {
  config
} from "./chunk-4GHSFNZX.js";
import {
  win
} from "./chunk-R3LVCYXH.js";
import {
  __async
} from "./chunk-LDD2MAR3.js";

// node_modules/@ionic/core/components/hardware-back-button.js
var shouldUseCloseWatcher = () => config.get("experimentalCloseWatcher", false) && win !== void 0 && "CloseWatcher" in win;
var blockHardwareBackButton = () => {
  document.addEventListener("backbutton", () => {
  });
};
var startHardwareBackButton = () => {
  const doc = document;
  let busy = false;
  const backButtonCallback = () => {
    if (busy) {
      return;
    }
    let index = 0;
    let handlers = [];
    const ev = new CustomEvent("ionBackButton", {
      bubbles: false,
      detail: {
        register(priority, handler) {
          handlers.push({ priority, handler, id: index++ });
        }
      }
    });
    doc.dispatchEvent(ev);
    const executeAction = (handlerRegister) => __async(void 0, null, function* () {
      try {
        if (handlerRegister === null || handlerRegister === void 0 ? void 0 : handlerRegister.handler) {
          const result = handlerRegister.handler(processHandlers);
          if (result != null) {
            yield result;
          }
        }
      } catch (e) {
        console.error(e);
      }
    });
    const processHandlers = () => {
      if (handlers.length > 0) {
        let selectedHandler = {
          priority: Number.MIN_SAFE_INTEGER,
          handler: () => void 0,
          id: -1
        };
        handlers.forEach((handler) => {
          if (handler.priority >= selectedHandler.priority) {
            selectedHandler = handler;
          }
        });
        busy = true;
        handlers = handlers.filter((handler) => handler.id !== selectedHandler.id);
        executeAction(selectedHandler).then(() => busy = false);
      }
    };
    processHandlers();
  };
  if (shouldUseCloseWatcher()) {
    let watcher;
    const configureWatcher = () => {
      watcher === null || watcher === void 0 ? void 0 : watcher.destroy();
      watcher = new win.CloseWatcher();
      watcher.onclose = () => {
        backButtonCallback();
        configureWatcher();
      };
    };
    configureWatcher();
  } else {
    doc.addEventListener("backbutton", backButtonCallback);
  }
};
var OVERLAY_BACK_BUTTON_PRIORITY = 100;
var MENU_BACK_BUTTON_PRIORITY = 99;

export {
  shouldUseCloseWatcher,
  blockHardwareBackButton,
  startHardwareBackButton,
  OVERLAY_BACK_BUTTON_PRIORITY,
  MENU_BACK_BUTTON_PRIORITY
};
/*! Bundled license information:

@ionic/core/components/hardware-back-button.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-KVXZQOEA.js.map
