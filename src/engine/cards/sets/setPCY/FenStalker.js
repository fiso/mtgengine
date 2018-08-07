"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FenStalker extends UnimplementedCard {
  constructor (game) {
    super(game, "Fen Stalker", "Prophecy", "PCY");
  }
}

module.exports = FenStalker;
