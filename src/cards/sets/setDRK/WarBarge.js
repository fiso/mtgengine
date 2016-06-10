"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarBarge extends UnimplementedCard {
  constructor (game) {
    super(game, "War Barge", "The Dark", "DRK");
  }
}

module.exports = WarBarge;
