"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RoaroftheCrowd extends Card {
  constructor(game) {
    super(game, "Roar of the Crowd", "Morningtide", "MOR");
  }
}

module.exports = RoaroftheCrowd;
