"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JunkDiver extends UnimplementedCard {
  constructor (game) {
    super(game, "Junk Diver", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = JunkDiver;
