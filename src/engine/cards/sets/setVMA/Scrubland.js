"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Scrubland extends UnimplementedCard {
  constructor (game) {
    super(game, "Scrubland", "Vintage Masters", "VMA");
  }
}

module.exports = Scrubland;
