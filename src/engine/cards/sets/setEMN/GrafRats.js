"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrafRats extends UnimplementedCard {
  constructor (game) {
    super(game, "Graf Rats", "Eldritch Moon", "EMN");
  }
}

module.exports = GrafRats;
