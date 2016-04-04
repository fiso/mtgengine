"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TitanicGrowth extends Card {
  constructor(game) {
    super(game, "Titanic Growth", "Magic 2012", "M12");
  }
}

module.exports = TitanicGrowth;
