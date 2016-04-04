"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JackalPup extends Card {
  constructor(game) {
    super(game, "Jackal Pup", "Friday Night Magic", "pFNM");
  }
}

module.exports = JackalPup;
