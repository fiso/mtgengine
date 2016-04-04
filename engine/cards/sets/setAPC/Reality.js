"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Reality extends Card {
  constructor(game) {
    super(game, "Reality", "Apocalypse", "APC");
  }
}

module.exports = Reality;
