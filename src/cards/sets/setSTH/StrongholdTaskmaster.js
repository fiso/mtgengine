"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrongholdTaskmaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Stronghold Taskmaster", "Stronghold", "STH");
  }
}

module.exports = StrongholdTaskmaster;
