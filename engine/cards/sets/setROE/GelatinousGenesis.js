"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GelatinousGenesis extends UnimplementedCard {
  constructor(game) {
    super(game, "Gelatinous Genesis", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = GelatinousGenesis;
