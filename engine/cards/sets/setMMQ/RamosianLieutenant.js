"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RamosianLieutenant extends Card {
  constructor(game) {
    super(game, "Ramosian Lieutenant", "Mercadian Masques", "MMQ");
  }
}

module.exports = RamosianLieutenant;
