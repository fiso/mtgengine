"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CreepingMold extends Card {
  constructor(game) {
    super(game, "Creeping Mold", "Arena League", "pARL");
  }
}

module.exports = CreepingMold;
