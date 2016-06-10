"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeasonedMarshal extends UnimplementedCard {
  constructor (game) {
    super(game, "Seasoned Marshal", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SeasonedMarshal;
