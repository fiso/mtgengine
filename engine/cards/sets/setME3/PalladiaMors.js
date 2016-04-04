"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PalladiaMorsBase = require("../setCHR/PalladiaMors.js");

class PalladiaMors extends PalladiaMorsBase {
  constructor(game) {
    super(game, "Palladia-Mors", "Masters Edition III", "ME3");
  }
}

module.exports = PalladiaMors;
