"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalduvianConjurer extends UnimplementedCard {
  constructor (game) {
    super(game, "Balduvian Conjurer", "Ice Age", "ICE");
  }
}

module.exports = BalduvianConjurer;
