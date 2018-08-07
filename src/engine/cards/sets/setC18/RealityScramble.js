"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RealityScramble extends UnimplementedCard {
  constructor (game) {
    super(game, "Reality Scramble", "Commander 2018", "C18");
  }
}

module.exports = RealityScramble;
