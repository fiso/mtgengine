"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlitheryStalker extends UnimplementedCard {
  constructor (game) {
    super(game, "Slithery Stalker", "Torment", "TOR");
  }
}

module.exports = SlitheryStalker;
