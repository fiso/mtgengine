"use strict";
const Constants = require ("../../../Constants");
const BaskingRootwallaBase = require("../setGVL/BaskingRootwalla");

class BaskingRootwalla extends BaskingRootwallaBase {
  constructor (game) {
    super(game, "Basking Rootwalla", "Magic Online Promos", "PRM");
  }
}

module.exports = BaskingRootwalla;
