"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrimAfflictionBase = require("../setMM2/GrimAffliction.js");

class GrimAffliction extends GrimAfflictionBase {
  constructor(game) {
    super(game, "Grim Affliction", "New Phyrexia", "NPH");
  }
}

module.exports = GrimAffliction;
