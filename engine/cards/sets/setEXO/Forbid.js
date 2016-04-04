"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Forbid extends Card {
  constructor(game) {
    super(game, "Forbid", "Exodus", "EXO");
  }
}

module.exports = Forbid;
