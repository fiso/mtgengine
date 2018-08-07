"use strict";
const Constants = require ("../../../Constants");
const ShanodinDryadsBase = require("../set7ED/ShanodinDryads");

class ShanodinDryads extends ShanodinDryadsBase {
  constructor (game) {
    super(game, "Shanodin Dryads", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = ShanodinDryads;
