"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarElephant extends UnimplementedCard {
  constructor (game) {
    super(game, "War Elephant", "Chronicles", "CHR");
  }
}

module.exports = WarElephant;
