"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TouchofDarkness extends Card {
  constructor(game) {
    super(game, "Touch of Darkness", "Legends", "LEG");
  }
}

module.exports = TouchofDarkness;
