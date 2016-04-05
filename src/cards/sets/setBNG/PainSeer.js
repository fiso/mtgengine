"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PainSeer extends UnimplementedCard {
  constructor(game) {
    super(game, "Pain Seer", "Born of the Gods", "BNG");
  }
}

module.exports = PainSeer;
