"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BelbesPercher extends UnimplementedCard {
  constructor (game) {
    super(game, "Belbe's Percher", "Nemesis", "NEM");
  }
}

module.exports = BelbesPercher;
