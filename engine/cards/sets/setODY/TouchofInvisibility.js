"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TouchofInvisibility extends Card {
  constructor(game) {
    super(game, "Touch of Invisibility", "Odyssey", "ODY");
  }
}

module.exports = TouchofInvisibility;
