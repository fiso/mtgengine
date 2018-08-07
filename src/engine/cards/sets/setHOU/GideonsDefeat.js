"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GideonsDefeat extends UnimplementedCard {
  constructor (game) {
    super(game, "Gideon's Defeat", "Hour of Devastation", "HOU");
  }
}

module.exports = GideonsDefeat;
