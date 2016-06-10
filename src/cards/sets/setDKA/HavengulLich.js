"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HavengulLich extends UnimplementedCard {
  constructor (game) {
    super(game, "Havengul Lich", "Dark Ascension", "DKA");
  }
}

module.exports = HavengulLich;
