"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Bequeathal extends Card {
  constructor(game) {
    super(game, "Bequeathal", "Exodus", "EXO");
  }
}

module.exports = Bequeathal;
