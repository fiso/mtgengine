"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForbiddenCrypt extends UnimplementedCard {
  constructor(game) {
    super(game, "Forbidden Crypt", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ForbiddenCrypt;
