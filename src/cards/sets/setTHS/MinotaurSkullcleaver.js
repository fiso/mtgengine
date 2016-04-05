"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MinotaurSkullcleaver extends UnimplementedCard {
  constructor(game) {
    super(game, "Minotaur Skullcleaver", "Theros", "THS");
  }
}

module.exports = MinotaurSkullcleaver;
