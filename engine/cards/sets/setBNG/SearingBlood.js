"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SearingBlood extends UnimplementedCard {
  constructor(game) {
    super(game, "Searing Blood", "Born of the Gods", "BNG");
  }
}

module.exports = SearingBlood;
