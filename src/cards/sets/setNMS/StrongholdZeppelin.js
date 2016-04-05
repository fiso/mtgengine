"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrongholdZeppelin extends UnimplementedCard {
  constructor(game) {
    super(game, "Stronghold Zeppelin", "Nemesis", "NMS");
  }
}

module.exports = StrongholdZeppelin;
