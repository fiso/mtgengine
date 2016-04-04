"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GalvanicJuggernautBase = require("../setISD/GalvanicJuggernaut.js");

class GalvanicJuggernaut extends GalvanicJuggernautBase {
  constructor(game) {
    super(game, "Galvanic Juggernaut", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = GalvanicJuggernaut;
