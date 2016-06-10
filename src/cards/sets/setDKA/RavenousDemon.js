"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RavenousDemon extends UnimplementedCard {
  constructor (game) {
    super(game, "Ravenous Demon", "Dark Ascension", "DKA");
  }
}

module.exports = RavenousDemon;
