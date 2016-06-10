"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrankensteinsMonster extends UnimplementedCard {
  constructor (game) {
    super(game, "Frankenstein's Monster", "The Dark", "DRK");
  }
}

module.exports = FrankensteinsMonster;
