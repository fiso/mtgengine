"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RavenousBaboons extends UnimplementedCard {
  constructor (game) {
    super(game, "Ravenous Baboons", "Exodus", "EXO");
  }
}

module.exports = RavenousBaboons;
