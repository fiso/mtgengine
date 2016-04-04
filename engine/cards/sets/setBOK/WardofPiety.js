"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WardofPiety extends Card {
  constructor(game) {
    super(game, "Ward of Piety", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = WardofPiety;
