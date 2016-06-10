"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JunkDiver extends UnimplementedCard {
  constructor (game) {
    super(game, "Junk Diver", "Commander 2014", "C14");
  }
}

module.exports = JunkDiver;
