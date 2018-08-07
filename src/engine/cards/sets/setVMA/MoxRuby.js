"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoxRuby extends UnimplementedCard {
  constructor (game) {
    super(game, "Mox Ruby", "Vintage Masters", "VMA");
  }
}

module.exports = MoxRuby;
