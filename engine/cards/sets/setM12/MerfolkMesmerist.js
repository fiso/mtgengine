"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MerfolkMesmerist extends Card {
  constructor(game) {
    super(game, "Merfolk Mesmerist", "Magic 2012", "M12");
  }
}

module.exports = MerfolkMesmerist;
