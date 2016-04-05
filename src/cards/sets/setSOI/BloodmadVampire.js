"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodmadVampire extends UnimplementedCard {
  constructor(game) {
    super(game, "Bloodmad Vampire", "Shadows over Innistrad", "SOI");
  }
}

module.exports = BloodmadVampire;
