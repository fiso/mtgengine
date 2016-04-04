"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThunderSpiritBase = require("../setLEG/ThunderSpirit.js");

class ThunderSpirit extends ThunderSpiritBase {
  constructor(game) {
    super(game, "Thunder Spirit", "Masters Edition", "MED");
  }
}

module.exports = ThunderSpirit;
