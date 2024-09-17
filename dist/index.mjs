var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/constants.ts
var SOCIAL_URLS = {
  twitter: "https://twitter.com/intent/tweet",
  facebook: "https://www.facebook.com/sharer/sharer.php",
  telegram: "https://t.me/share/url",
  whatsapp: "https://wa.me",
  reddit: "https://reddit.com/submit",
  linkedin: "https://www.linkedin.com/sharing/share-offsite",
  tumblr: "https://www.tumblr.com/widgets/share/tool",
  gmail: "https://mail.google.com/mail",
  pocket: "https://getpocket.com/edit"
};

// src/utils.ts
var toQueryString = (params) => {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value) query.set(key, `${value}`);
  }
  return query.toString();
};
var socialBase = (queryParams, socialBaseUrl) => {
  const params = toQueryString(__spreadValues({}, queryParams));
  return `${SOCIAL_URLS[socialBaseUrl]}?${params.toString()}`;
};

// src/index.ts
var twitter = (props) => socialBase(props, "twitter");
var facebook = (props) => {
  var _a;
  const params = __spreadProps(__spreadValues({}, props), {
    u: (_a = props.u) != null ? _a : props.url,
    url: void 0,
    text: void 0
  });
  return socialBase(params, "facebook");
};
var telegram = (props) => socialBase(props, "telegram");
var whatsapp = (props) => {
  const params = __spreadProps(__spreadValues({}, props), {
    text: props.text ? `${props.text} ${props.url}` : props.url,
    url: void 0
  });
  return socialBase(params, "whatsapp");
};
var reddit = (props) => {
  var _a;
  const params = __spreadProps(__spreadValues({}, props), {
    title: (_a = props.title) != null ? _a : props.text,
    text: void 0
  });
  return socialBase(params, "reddit");
};
var linkedin = (props) => {
  const params = __spreadValues({}, props);
  return socialBase(params, "linkedin");
};
var tumblr = (props) => {
  var _a, _b;
  const params = __spreadProps(__spreadValues({}, props), {
    posttype: "link",
    canonicalUrl: (_a = props.canonicalUrl) != null ? _a : props.url,
    content: (_b = props.text) != null ? _b : props.caption,
    url: void 0,
    text: void 0
  });
  return socialBase(params, "tumblr");
};
var gmail = (props) => {
  var _a, _b;
  const params = __spreadProps(__spreadValues({}, props), {
    view: "cm",
    body: `${(_a = props.body) != null ? _a : props.text} ${props.url}`,
    su: (_b = props.su) != null ? _b : props.subject,
    url: void 0,
    text: void 0
  });
  return socialBase(params, "gmail");
};
var mailto = (props) => {
  var _a, _b;
  const params = __spreadProps(__spreadValues({}, props), {
    body: `${(_a = props.body) != null ? _a : props.text} ${props.url}`,
    url: void 0,
    text: void 0
  });
  return `mailto:${(_b = props.emailAddress) != null ? _b : ""}?${toQueryString(params)}`;
};
var pocket = (props) => {
  const params = __spreadProps(__spreadValues({}, props), {
    text: void 0
  });
  return socialBase(params, "pocket");
};
var init = () => {
  let windowObjectReference = null;
  function openRequestedTab(url, windowName) {
    if (windowObjectReference === null || windowObjectReference.closed) {
      windowObjectReference = window.open(
        url,
        windowName,
        "popup,width=600,height=600"
      );
    } else {
      windowObjectReference.focus();
    }
  }
  const links = document.querySelectorAll("a[open-win]");
  for (let link of links) {
    link.removeAttribute("target");
    link.addEventListener(
      "click",
      (e) => {
        openRequestedTab(link.href, "_blank");
        e.preventDefault();
      },
      false
    );
  }
};
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", init);
}
export {
  facebook,
  gmail,
  linkedin,
  mailto,
  pocket,
  reddit,
  telegram,
  tumblr,
  twitter,
  whatsapp
};
//# sourceMappingURL=index.mjs.map