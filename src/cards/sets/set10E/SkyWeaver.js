"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkyWeaver extends UnimplementedCard {
  constructor (game) {
    super(game, "Sky Weaver", "Tenth Edition", "10E");
  }
}

module.exports = SkyWeaver;
