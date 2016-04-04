"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MightstoneBase = require("../setATQ/Mightstone.js");

class Mightstone extends MightstoneBase {
  constructor(game) {
    super(game, "Mightstone", "Masters Edition IV", "ME4");
  }
}

module.exports = Mightstone;
