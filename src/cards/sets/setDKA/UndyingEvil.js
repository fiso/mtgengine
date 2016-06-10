"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UndyingEvil extends UnimplementedCard {
  constructor (game) {
    super(game, "Undying Evil", "Dark Ascension", "DKA");
  }
}

module.exports = UndyingEvil;
