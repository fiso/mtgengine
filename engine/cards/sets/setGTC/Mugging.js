"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mugging extends Card {
  constructor(game) {
    super(game, "Mugging", "Gatecrash", "GTC");
  }
}

module.exports = Mugging;
