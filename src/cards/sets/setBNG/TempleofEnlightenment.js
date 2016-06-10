"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TempleofEnlightenment extends UnimplementedCard {
  constructor (game) {
    super(game, "Temple of Enlightenment", "Born of the Gods", "BNG");
  }
}

module.exports = TempleofEnlightenment;
