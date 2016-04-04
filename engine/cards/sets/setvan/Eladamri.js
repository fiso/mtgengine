"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Eladamri extends Card {
  constructor(game) {
    super(game, "Eladamri", "Vanguard", "VAN");
  }
}

module.exports = Eladamri;
