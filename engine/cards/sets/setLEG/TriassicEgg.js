"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TriassicEggBase = require("../setCHR/TriassicEgg.js");

class TriassicEgg extends TriassicEggBase {
  constructor(game) {
    super(game, "Triassic Egg", "Legends", "LEG");
  }
}

module.exports = TriassicEgg;
