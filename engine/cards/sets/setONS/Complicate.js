"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Complicate extends Card {
  constructor(game) {
    super(game, "Complicate", "Onslaught", "ONS");
  }
}

module.exports = Complicate;
