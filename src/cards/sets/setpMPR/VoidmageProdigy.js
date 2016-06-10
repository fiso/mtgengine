"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoidmageProdigy extends UnimplementedCard {
  constructor (game) {
    super(game, "Voidmage Prodigy", "Magic Player Rewards", "pMPR");
  }
}

module.exports = VoidmageProdigy;
