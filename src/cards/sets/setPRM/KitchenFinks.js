"use strict";
const Constants = require ("../../../Constants");
const KitchenFinksBase = require("../setMMA/KitchenFinks");

class KitchenFinks extends KitchenFinksBase {
  constructor (game) {
    super(game, "Kitchen Finks", "Magic Online Promos", "PRM");
  }
}

module.exports = KitchenFinks;
