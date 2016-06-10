"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MinotaurTactician extends UnimplementedCard {
  constructor (game) {
    super(game, "Minotaur Tactician", "Apocalypse", "APC");
  }
}

module.exports = MinotaurTactician;
