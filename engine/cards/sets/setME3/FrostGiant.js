"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FrostGiantBase = require("../setLEG/FrostGiant.js");

class FrostGiant extends FrostGiantBase {
  constructor(game) {
    super(game, "Frost Giant", "Masters Edition III", "ME3");
  }
}

module.exports = FrostGiant;
