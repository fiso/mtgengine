"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sustenance extends UnimplementedCard {
  constructor (game) {
    super(game, "Sustenance", "Mercadian Masques", "MMQ");
  }
}

module.exports = Sustenance;
