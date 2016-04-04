"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HopeCharm extends Card {
  constructor(game) {
    super(game, "Hope Charm", "Visions", "VIS");
  }
}

module.exports = HopeCharm;
