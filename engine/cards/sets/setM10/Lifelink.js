"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Lifelink extends Card {
  constructor(game) {
    super(game, "Lifelink", "Magic 2010", "M10");
  }
}

module.exports = Lifelink;
