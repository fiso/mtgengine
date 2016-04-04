"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Dismember extends Card {
  constructor(game) {
    super(game, "Dismember", "Friday Night Magic", "pFNM");
  }
}

module.exports = Dismember;
