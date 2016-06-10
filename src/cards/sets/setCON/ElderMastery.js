"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElderMastery extends UnimplementedCard {
  constructor (game) {
    super(game, "Elder Mastery", "Conflux", "CON");
  }
}

module.exports = ElderMastery;
