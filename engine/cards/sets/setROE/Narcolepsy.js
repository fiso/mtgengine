"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NarcolepsyBase = require("../setMM2/Narcolepsy.js");

class Narcolepsy extends NarcolepsyBase {
  constructor(game) {
    super(game, "Narcolepsy", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Narcolepsy;
