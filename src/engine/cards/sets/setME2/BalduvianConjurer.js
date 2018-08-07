"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalduvianConjurer extends UnimplementedCard {
  constructor (game) {
    super(game, "Balduvian Conjurer", "Masters Edition II", "ME2");
  }
}

module.exports = BalduvianConjurer;
