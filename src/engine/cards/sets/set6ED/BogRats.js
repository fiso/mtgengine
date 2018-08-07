"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BogRats extends UnimplementedCard {
  constructor (game) {
    super(game, "Bog Rats", "Classic Sixth Edition", "6ED");
  }
}

module.exports = BogRats;
