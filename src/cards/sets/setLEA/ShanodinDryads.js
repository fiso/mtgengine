"use strict";
const Constants = require ("../../../Constants");
const ShanodinDryadsBase = require("../set7ED/ShanodinDryads");

class ShanodinDryads extends ShanodinDryadsBase {
  constructor (game) {
    super(game, "Shanodin Dryads", "Limited Edition Alpha", "LEA");
  }
}

module.exports = ShanodinDryads;
