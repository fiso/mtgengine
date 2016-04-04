"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ForbiddenCrypt extends Card {
  constructor(game) {
    super(game, "Forbidden Crypt", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ForbiddenCrypt;
