"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Excommunicate extends Card {
  constructor(game) {
    super(game, "Excommunicate", "Magic 2010", "M10");
  }
}

module.exports = Excommunicate;
