"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThrullRetainer extends Card {
  constructor(game) {
    super(game, "Thrull Retainer", "Fallen Empires", "FEM");
  }
}

module.exports = ThrullRetainer;
