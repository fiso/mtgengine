"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoggBombers extends UnimplementedCard {
  constructor(game) {
    super(game, "Mogg Bombers", "Stronghold", "STH");
  }
}

module.exports = MoggBombers;
