"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EncroachingWastes extends Card {
  constructor(game) {
    super(game, "Encroaching Wastes", "Friday Night Magic", "pFNM");
  }
}

module.exports = EncroachingWastes;
