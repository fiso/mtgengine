"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SaltMarsh extends UnimplementedCard {
  constructor (game) {
    super(game, "Salt Marsh", "Eighth Edition", "8ED");
  }
}

module.exports = SaltMarsh;
