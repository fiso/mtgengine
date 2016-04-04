"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GalvanothBase = require("../setDDJ/Galvanoth.js");

class Galvanoth extends GalvanothBase {
  constructor(game) {
    super(game, "Galvanoth", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Galvanoth;
