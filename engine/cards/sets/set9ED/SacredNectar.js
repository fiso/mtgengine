"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SacredNectarBase = require("../set8ED/SacredNectar.js");

class SacredNectar extends SacredNectarBase {
  constructor(game) {
    super(game, "Sacred Nectar", "Ninth Edition", "9ED");
  }
}

module.exports = SacredNectar;
