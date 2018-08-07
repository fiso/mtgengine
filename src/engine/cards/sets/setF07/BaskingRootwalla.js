"use strict";
const Constants = require ("../../../Constants");
const BaskingRootwallaBase = require("../setGVL/BaskingRootwalla");

class BaskingRootwalla extends BaskingRootwallaBase {
  constructor (game) {
    super(game, "Basking Rootwalla", "Friday Night Magic 2007", "F07");
  }
}

module.exports = BaskingRootwalla;
