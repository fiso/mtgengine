"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RisetotheChallenge extends UnimplementedCard {
  constructor(game) {
    super(game, "Rise to the Challenge", "Born of the Gods", "BNG");
  }
}

module.exports = RisetotheChallenge;
