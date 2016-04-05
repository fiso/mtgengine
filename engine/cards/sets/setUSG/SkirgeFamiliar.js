"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkirgeFamiliar extends UnimplementedCard {
  constructor(game) {
    super(game, "Skirge Familiar", "Urza's Saga", "USG");
  }
}

module.exports = SkirgeFamiliar;
