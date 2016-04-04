"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvacynsPilgrim extends Card {
  constructor(game) {
    super(game, "Avacyn's Pilgrim", "Friday Night Magic", "pFNM");
  }
}

module.exports = AvacynsPilgrim;
