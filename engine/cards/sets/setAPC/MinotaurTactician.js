"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MinotaurTactician extends Card {
  constructor(game) {
    super(game, "Minotaur Tactician", "Apocalypse", "APC");
  }
}

module.exports = MinotaurTactician;
