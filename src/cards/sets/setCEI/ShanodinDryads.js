"use strict";
const Constants = require ("../../../Constants");
const ShanodinDryadsBase = require("../set6ED/ShanodinDryads");

class ShanodinDryads extends ShanodinDryadsBase {
  constructor (game) {
    super(game, "Shanodin Dryads", "International Collector's Edition", "CEI");
  }
}

module.exports = ShanodinDryads;
