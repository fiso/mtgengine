"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeekersSquire extends UnimplementedCard {
  constructor (game) {
    super(game, "Seekers' Squire", "Ixalan", "XLN");
  }
}

module.exports = SeekersSquire;
