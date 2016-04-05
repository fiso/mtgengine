"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MinotaurIllusionist extends UnimplementedCard {
  constructor(game) {
    super(game, "Minotaur Illusionist", "Apocalypse", "APC");
  }
}

module.exports = MinotaurIllusionist;
