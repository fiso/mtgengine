"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NissasDefeat extends UnimplementedCard {
  constructor (game) {
    super(game, "Nissa's Defeat", "Hour of Devastation", "HOU");
  }
}

module.exports = NissasDefeat;
