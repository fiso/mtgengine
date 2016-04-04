"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KitchenFinks extends Card {
  constructor(game) {
    super(game, "Kitchen Finks", "Friday Night Magic", "pFNM");
  }
}

module.exports = KitchenFinks;
