"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrongholdGambit extends UnimplementedCard {
  constructor (game) {
    super(game, "Stronghold Gambit", "Nemesis", "NMS");
  }
}

module.exports = StrongholdGambit;
