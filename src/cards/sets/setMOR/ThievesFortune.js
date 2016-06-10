"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThievesFortune extends UnimplementedCard {
  constructor (game) {
    super(game, "Thieves' Fortune", "Morningtide", "MOR");
  }
}

module.exports = ThievesFortune;
