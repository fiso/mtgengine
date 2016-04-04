"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SufferingBase = require("../setDDH/Suffering.js");

class Suffering extends SufferingBase {
  constructor(game) {
    super(game, "Suffering", "Invasion", "INV");
  }
}

module.exports = Suffering;
