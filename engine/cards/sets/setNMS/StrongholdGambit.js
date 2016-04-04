"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StrongholdGambit extends Card {
  constructor(game) {
    super(game, "Stronghold Gambit", "Nemesis", "NMS");
  }
}

module.exports = StrongholdGambit;
