"use strict";
const Constants = require ("../../../Constants");
const ShanodinDryadsBase = require("../set6ED/ShanodinDryads");

class ShanodinDryads extends ShanodinDryadsBase {
  constructor(game) {
    super(game, "Shanodin Dryads", "Seventh Edition", "7ED");
  }
}

module.exports = ShanodinDryads;
