"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoollyRazorback extends UnimplementedCard {
  constructor (game) {
    super(game, "Woolly Razorback", "Coldsnap", "CSP");
  }
}

module.exports = WoollyRazorback;
