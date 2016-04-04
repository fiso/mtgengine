"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StrongholdMachinist extends Card {
  constructor(game) {
    super(game, "Stronghold Machinist", "Nemesis", "NMS");
  }
}

module.exports = StrongholdMachinist;
