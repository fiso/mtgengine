"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Addle extends UnimplementedCard {
  constructor (game) {
    super(game, "Addle", "Vintage Masters", "VMA");
  }
}

module.exports = Addle;
