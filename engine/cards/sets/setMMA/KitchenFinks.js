"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KitchenFinksBase = require("../setpFNM/KitchenFinks.js");

class KitchenFinks extends KitchenFinksBase {
  constructor(game) {
    super(game, "Kitchen Finks", "Modern Masters", "MMA");
  }
}

module.exports = KitchenFinks;
