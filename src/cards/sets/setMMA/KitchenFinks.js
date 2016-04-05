"use strict";
const Constants = require ("../../../Constants");
const KitchenFinksBase = require("../setpFNM/KitchenFinks");

class KitchenFinks extends KitchenFinksBase {
  constructor(game) {
    super(game, "Kitchen Finks", "Modern Masters", "MMA");
  }
}

module.exports = KitchenFinks;
