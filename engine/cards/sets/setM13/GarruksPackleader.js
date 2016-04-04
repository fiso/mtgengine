"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GarruksPackleaderBase = require("../setM11/GarruksPackleader.js");

class GarruksPackleader extends GarruksPackleaderBase {
  constructor(game) {
    super(game, "Garruk's Packleader", "Magic 2013", "M13");
  }
}

module.exports = GarruksPackleader;
