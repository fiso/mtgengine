"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RavenousChupacabra extends UnimplementedCard {
  constructor (game) {
    super(game, "Ravenous Chupacabra", "Masters 25", "A25");
  }
}

module.exports = RavenousChupacabra;
