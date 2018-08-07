"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MajesticHeliopterus extends UnimplementedCard {
  constructor (game) {
    super(game, "Majestic Heliopterus", "Rivals of Ixalan", "RIX");
  }
}

module.exports = MajesticHeliopterus;
