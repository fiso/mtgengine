"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cleansing extends UnimplementedCard {
  constructor (game) {
    super(game, "Cleansing", "The Dark", "DRK");
  }
}

module.exports = Cleansing;
