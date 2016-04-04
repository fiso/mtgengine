"use strict";
const Constants = require ("../../../Constants");
const KitchenFinksBase = require("../setpFNM/KitchenFinks");

class KitchenFinks extends KitchenFinksBase {
  constructor(game) {
    super(game, "Kitchen Finks", "Shadowmoor", "SHM");
  }
}

module.exports = KitchenFinks;
