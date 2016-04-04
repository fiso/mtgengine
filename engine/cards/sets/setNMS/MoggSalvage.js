"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoggSalvage extends Card {
  constructor(game) {
    super(game, "Mogg Salvage", "Nemesis", "NMS");
  }
}

module.exports = MoggSalvage;
