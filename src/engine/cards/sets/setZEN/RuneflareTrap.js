"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RuneflareTrap extends UnimplementedCard {
  constructor (game) {
    super(game, "Runeflare Trap", "Zendikar", "ZEN");
  }
}

module.exports = RuneflareTrap;
