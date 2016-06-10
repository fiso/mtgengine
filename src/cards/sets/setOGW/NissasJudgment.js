"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NissasJudgment extends UnimplementedCard {
  constructor (game) {
    super(game, "Nissa's Judgment", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = NissasJudgment;
