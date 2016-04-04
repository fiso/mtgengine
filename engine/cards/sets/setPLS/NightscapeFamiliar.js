"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NightscapeFamiliarBase = require("../setC13/NightscapeFamiliar.js");

class NightscapeFamiliar extends NightscapeFamiliarBase {
  constructor(game) {
    super(game, "Nightscape Familiar", "Planeshift", "PLS");
  }
}

module.exports = NightscapeFamiliar;
