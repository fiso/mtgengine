"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WorryBeads extends UnimplementedCard {
  constructor (game) {
    super(game, "Worry Beads", "Mercadian Masques", "MMQ");
  }
}

module.exports = WorryBeads;
