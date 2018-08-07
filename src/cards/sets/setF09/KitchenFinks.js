"use strict";
const Constants = require ("../../../Constants");
const KitchenFinksBase = require("../setMMA/KitchenFinks");

class KitchenFinks extends KitchenFinksBase {
  constructor (game) {
    super(game, "Kitchen Finks", "Friday Night Magic 2009", "F09");
  }
}

module.exports = KitchenFinks;
