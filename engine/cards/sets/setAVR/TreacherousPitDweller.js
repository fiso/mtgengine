"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TreacherousPitDweller extends Card {
  constructor(game) {
    super(game, "Treacherous Pit-Dweller", "Avacyn Restored", "AVR");
  }
}

module.exports = TreacherousPitDweller;
