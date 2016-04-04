"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StrongholdZeppelin extends Card {
  constructor(game) {
    super(game, "Stronghold Zeppelin", "Nemesis", "NMS");
  }
}

module.exports = StrongholdZeppelin;
