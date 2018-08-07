"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MuckRats extends UnimplementedCard {
  constructor (game) {
    super(game, "Muck Rats", "Starter 1999", "S99");
  }
}

module.exports = MuckRats;
