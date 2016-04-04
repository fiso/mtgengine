"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FamiliarGroundBase = require("../set6ED/FamiliarGround.js");

class FamiliarGround extends FamiliarGroundBase {
  constructor(game) {
    super(game, "Familiar Ground", "Seventh Edition", "7ED");
  }
}

module.exports = FamiliarGround;
