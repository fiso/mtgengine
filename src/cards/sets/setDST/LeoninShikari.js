"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeoninShikari extends UnimplementedCard {
  constructor (game) {
    super(game, "Leonin Shikari", "Darksteel", "DST");
  }
}

module.exports = LeoninShikari;
