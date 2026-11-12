function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5fXpDhQs0FQ":
        Script1();
        break;
      case "6XQj0pVS0tA":
        Script2();
        break;
      case "5txzSugCdPe":
        Script3();
        break;
      case "6djhDatYFNO":
        Script4();
        break;
      case "5trlaPD6Y0O":
        Script5();
        break;
      case "5lPhjfbS7Sc":
        Script6();
        break;
      case "5w68oxNvzfu":
        Script7();
        break;
      case "6TE72dlqUPU":
        Script8();
        break;
      case "5eu03iL6P4M":
        Script9();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  player.once(() => {
const target = object('6aww09frxj1');
const duration = 2000;
const easing = 'ease-out';
const id = '6Mp2S23nICx';
const pulseAmount = 0.1;
const delay = 1000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('5qxdSDShUZ3');
const duration = 2000;
const easing = 'ease-out';
const id = '5VYsQO0dDci';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  const target = object('5qxdSDShUZ3');
const duration = 2000;
const easing = 'ease-out';
const id = '5VYsQO0dDci';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  player.once(() => {
const target = object('6Xeimk0Ik2I');
const duration = 2000;
const easing = 'ease-out';
const id = '6jtDkBNb90E';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  const target = object('6Xeimk0Ik2I');
const duration = 2000;
const easing = 'ease-out';
const id = '6jtDkBNb90E';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  player.once(() => {
const target = object('63Q9HDy93aO');
const duration = 2000;
const easing = 'ease-out';
const id = '6Mp2S23nICx';
const pulseAmount = 0.1;
const delay = 1000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script7 = function()
{
  player.once(() => {
const target = object('6Owl05CGr7s');
const duration = 2000;
const easing = 'ease-out';
const id = '6Mp2S23nICx';
const pulseAmount = 0.1;
const delay = 1000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  player.once(() => {
const target = object('5Y5L96ueBEL');
const duration = 2000;
const easing = 'ease-out';
const id = '6Mp2S23nICx';
const pulseAmount = 0.1;
const delay = 1000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script9 = function()
{
  player.once(() => {
const target = object('6KbJtF0r5Xk');
const duration = 2000;
const easing = 'ease-out';
const id = '6Mp2S23nICx';
const pulseAmount = 0.1;
const delay = 1000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
