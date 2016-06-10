"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MuckRats extends UnimplementedCard {
  constructor (game) {
    super(game, "Muck Rats", "Portal", "POR");
  }
}

module.exports = MuckRats;
