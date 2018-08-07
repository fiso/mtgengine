"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DampingEngine extends UnimplementedCard {
  constructor (game) {
    super(game, "Damping Engine", "Urza's Legacy", "ULG");
  }
}

module.exports = DampingEngine;
