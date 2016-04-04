"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShrapnelBlast extends Card {
  constructor(game) {
    super(game, "Shrapnel Blast", "Friday Night Magic", "pFNM");
  }
}

module.exports = ShrapnelBlast;
