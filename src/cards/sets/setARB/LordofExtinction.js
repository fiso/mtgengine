"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LordofExtinction extends UnimplementedCard {
  constructor(game) {
    super(game, "Lord of Extinction", "Alara Reborn", "ARB");
  }
}

module.exports = LordofExtinction;
