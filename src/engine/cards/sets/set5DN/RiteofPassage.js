"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiteofPassage extends UnimplementedCard {
  constructor (game) {
    super(game, "Rite of Passage", "Fifth Dawn", "5DN");
  }
}

module.exports = RiteofPassage;
