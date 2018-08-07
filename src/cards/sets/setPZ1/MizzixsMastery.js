"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MizzixsMastery extends UnimplementedCard {
  constructor (game) {
    super(game, "Mizzix's Mastery", "Legendary Cube", "PZ1");
  }
}

module.exports = MizzixsMastery;
