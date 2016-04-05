"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CaptivatingVampire extends UnimplementedCard {
  constructor(game) {
    super(game, "Captivating Vampire", "Magic 2011", "M11");
  }
}

module.exports = CaptivatingVampire;
