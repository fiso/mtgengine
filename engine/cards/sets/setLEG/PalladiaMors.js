"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PalladiaMorsBase = require("../setCHR/PalladiaMors.js");

class PalladiaMors extends PalladiaMorsBase {
  constructor(game) {
    super(game, "Palladia-Mors", "Legends", "LEG");
  }
}

module.exports = PalladiaMors;
