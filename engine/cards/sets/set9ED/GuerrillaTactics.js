"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GuerrillaTacticsBase = require("../setALL/GuerrillaTactics.js");

class GuerrillaTactics extends GuerrillaTacticsBase {
  constructor(game) {
    super(game, "Guerrilla Tactics", "Ninth Edition", "9ED");
  }
}

module.exports = GuerrillaTactics;
