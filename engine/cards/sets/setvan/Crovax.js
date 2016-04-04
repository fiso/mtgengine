"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Crovax extends Card {
  constructor(game) {
    super(game, "Crovax", "Vanguard", "VAN");
  }
}

module.exports = Crovax;
