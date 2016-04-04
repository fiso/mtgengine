"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BestialFuryBase = require("../setALL/BestialFury.js");

class BestialFury extends BestialFuryBase {
  constructor(game) {
    super(game, "Bestial Fury", "Masters Edition", "MED");
  }
}

module.exports = BestialFury;
