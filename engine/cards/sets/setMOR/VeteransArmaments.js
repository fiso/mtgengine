"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VeteransArmaments extends Card {
  constructor(game) {
    super(game, "Veteran's Armaments", "Morningtide", "MOR");
  }
}

module.exports = VeteransArmaments;
