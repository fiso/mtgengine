"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BogRats extends UnimplementedCard {
  constructor (game) {
    super(game, "Bog Rats", "Chronicles", "CHR");
  }
}

module.exports = BogRats;
