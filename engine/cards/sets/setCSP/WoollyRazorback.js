"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WoollyRazorback extends Card {
  constructor(game) {
    super(game, "Woolly Razorback", "Coldsnap", "CSP");
  }
}

module.exports = WoollyRazorback;
