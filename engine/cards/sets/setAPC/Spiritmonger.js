"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Spiritmonger extends Card {
  constructor(game) {
    super(game, "Spiritmonger", "Apocalypse", "APC");
  }
}

module.exports = Spiritmonger;
