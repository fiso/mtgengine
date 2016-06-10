"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Purge extends UnimplementedCard {
  constructor (game) {
    super(game, "Purge", "Darksteel", "DST");
  }
}

module.exports = Purge;
