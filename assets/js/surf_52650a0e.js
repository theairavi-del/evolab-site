const script = document.getElementById('surfside');
const accountId = script.getAttribute('advertiserId') || script.getAttribute('accountId') || '00000';
const sourceId = script.getAttribute('campaignId') || script.getAttribute('sourceId') || '00000';
const platform = script.getAttribute('platform') || 'digital';

var sC = {
  accountId: accountId,
  sourceId: sourceId,
  platform: platform,
};

console.log("SURF Context Set @ ", sC)

;(function(s,u,r,f,i,n,g){if(!s[i]){s.surfContext=s.surfContext||[];
s.surfContext.push(i);s[i]=function(){(s[i].q=s[i].q||[]).push(arguments)
};s[i].q=s[i].q||[];n=u.createElement(r);g=u.getElementsByTagName(r)[0];n.async=1;
n.src=f;g.parentNode.insertBefore(n,g)}}(window,document,"script","//cdn.surfside.io/sdk/1.0.0/edge.js","surf")); 
surf("newTracker", "digital", "//col.surfside.io", {
  appId: "digital",
  cookieName: "surf",
  cookieDomain: "surfside.io"
});

surf('source:digital', {
  accountId: sC.accountId,
  sourceId: sC.sourceId,
});

surf('enableActivityTracking:digital', {
  minimumVisitLength: 30,
  heartbeatDelay: 10,
});
surf('enableLinkClickTracking:digital');

surf('trackPageView:digital');