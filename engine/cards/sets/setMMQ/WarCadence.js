"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WarCadenceBase = require("../setC13/WarCadence.js");

class WarCadence extends WarCadenceBase {
  constructor(game) {
    super(game, "War Cadence", "Mercadian Masques", "MMQ");
  }
}

module.exports = WarCadence;
