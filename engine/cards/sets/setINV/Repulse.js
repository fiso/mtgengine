"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RepulseBase = require("../setDD3_JVC/Repulse.js");

class Repulse extends RepulseBase {
  constructor(game) {
    super(game, "Repulse", "Invasion", "INV");
  }
}

module.exports = Repulse;
