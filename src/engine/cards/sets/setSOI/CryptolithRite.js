"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CryptolithRite extends UnimplementedCard {
  constructor (game) {
    super(game, "Cryptolith Rite", "Shadows over Innistrad", "SOI");
  }
}

module.exports = CryptolithRite;
