"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PygmyRazorback extends UnimplementedCard {
  constructor (game) {
    super(game, "Pygmy Razorback", "Prophecy", "PCY");
  }
}

module.exports = PygmyRazorback;
