"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianSlayer extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Slayer", "Invasion", "INV");
  }
}

module.exports = PhyrexianSlayer;
