"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GaeasAvengerBase = require("../setATQ/GaeasAvenger.js");

class GaeasAvenger extends GaeasAvengerBase {
  constructor(game) {
    super(game, "Gaea's Avenger", "Masters Edition IV", "ME4");
  }
}

module.exports = GaeasAvenger;
