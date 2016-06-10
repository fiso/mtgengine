"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Delraich extends UnimplementedCard {
  constructor (game) {
    super(game, "Delraich", "Mercadian Masques", "MMQ");
  }
}

module.exports = Delraich;
