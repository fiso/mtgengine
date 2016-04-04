"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PygmyRazorback extends Card {
  constructor(game) {
    super(game, "Pygmy Razorback", "Prophecy", "PCY");
  }
}

module.exports = PygmyRazorback;
