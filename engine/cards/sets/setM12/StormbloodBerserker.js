"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StormbloodBerserker extends Card {
  constructor(game) {
    super(game, "Stormblood Berserker", "Magic 2012", "M12");
  }
}

module.exports = StormbloodBerserker;
