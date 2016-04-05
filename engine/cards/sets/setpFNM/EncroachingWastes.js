"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EncroachingWastes extends UnimplementedCard {
  constructor(game) {
    super(game, "Encroaching Wastes", "Friday Night Magic", "pFNM");
  }
}

module.exports = EncroachingWastes;
