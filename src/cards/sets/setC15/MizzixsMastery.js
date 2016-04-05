"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MizzixsMastery extends UnimplementedCard {
  constructor(game) {
    super(game, "Mizzix's Mastery", "Commander 2015", "C15");
  }
}

module.exports = MizzixsMastery;
