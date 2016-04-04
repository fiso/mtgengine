"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArboriaBase = require("../setLEG/Arboria.js");

class Arboria extends ArboriaBase {
  constructor(game) {
    super(game, "Arboria", "Masters Edition III", "ME3");
  }
}

module.exports = Arboria;
