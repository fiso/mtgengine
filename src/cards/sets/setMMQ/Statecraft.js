"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Statecraft extends UnimplementedCard {
  constructor (game) {
    super(game, "Statecraft", "Mercadian Masques", "MMQ");
  }
}

module.exports = Statecraft;
