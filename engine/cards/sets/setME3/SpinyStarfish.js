"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpinyStarfishBase = require("../setALL/SpinyStarfish.js");

class SpinyStarfish extends SpinyStarfishBase {
  constructor(game) {
    super(game, "Spiny Starfish", "Masters Edition III", "ME3");
  }
}

module.exports = SpinyStarfish;
