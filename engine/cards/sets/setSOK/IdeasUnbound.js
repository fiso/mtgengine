"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IdeasUnbound extends Card {
  constructor(game) {
    super(game, "Ideas Unbound", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = IdeasUnbound;
