"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConjurersCloset extends UnimplementedCard {
  constructor(game) {
    super(game, "Conjurer's Closet", "Avacyn Restored", "AVR");
  }
}

module.exports = ConjurersCloset;
