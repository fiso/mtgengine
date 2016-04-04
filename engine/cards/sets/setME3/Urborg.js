"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UrborgBase = require("../setLEG/Urborg.js");

class Urborg extends UrborgBase {
  constructor(game) {
    super(game, "Urborg", "Masters Edition III", "ME3");
  }
}

module.exports = Urborg;
