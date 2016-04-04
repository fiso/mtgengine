"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MinotaurIllusionist extends Card {
  constructor(game) {
    super(game, "Minotaur Illusionist", "Apocalypse", "APC");
  }
}

module.exports = MinotaurIllusionist;
