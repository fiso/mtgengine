"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GostaDirk extends UnimplementedCard {
  constructor (game) {
    super(game, "Gosta Dirk", "Legends", "LEG");
  }
}

module.exports = GostaDirk;
