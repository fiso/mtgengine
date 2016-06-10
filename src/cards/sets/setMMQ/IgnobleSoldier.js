"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IgnobleSoldier extends UnimplementedCard {
  constructor (game) {
    super(game, "Ignoble Soldier", "Mercadian Masques", "MMQ");
  }
}

module.exports = IgnobleSoldier;
