"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GuerrillaTacticsBase = require("../setALL/GuerrillaTactics.js");

class GuerrillaTactics extends GuerrillaTacticsBase {
  constructor(game) {
    super(game, "Guerrilla Tactics", "Deckmasters", "DKM");
  }
}

module.exports = GuerrillaTactics;
