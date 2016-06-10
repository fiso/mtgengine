"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrongholdMachinist extends UnimplementedCard {
  constructor (game) {
    super(game, "Stronghold Machinist", "Nemesis", "NMS");
  }
}

module.exports = StrongholdMachinist;
