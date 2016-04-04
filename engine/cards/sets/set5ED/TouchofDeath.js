"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TouchofDeath extends Card {
  constructor(game) {
    super(game, "Touch of Death", "Fifth Edition", "5ED");
  }
}

module.exports = TouchofDeath;
