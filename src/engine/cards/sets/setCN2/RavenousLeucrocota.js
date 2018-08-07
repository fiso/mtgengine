"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RavenousLeucrocota extends UnimplementedCard {
  constructor (game) {
    super(game, "Ravenous Leucrocota", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = RavenousLeucrocota;
