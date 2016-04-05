"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JwariScuttler extends UnimplementedCard {
  constructor(game) {
    super(game, "Jwari Scuttler", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = JwariScuttler;
