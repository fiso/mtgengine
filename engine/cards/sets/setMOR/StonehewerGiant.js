"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StonehewerGiantBase = require("../setMMA/StonehewerGiant.js");

class StonehewerGiant extends StonehewerGiantBase {
  constructor(game) {
    super(game, "Stonehewer Giant", "Morningtide", "MOR");
  }
}

module.exports = StonehewerGiant;
