"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChandrasDefeat extends UnimplementedCard {
  constructor (game) {
    super(game, "Chandra's Defeat", "Hour of Devastation", "HOU");
  }
}

module.exports = ChandrasDefeat;
