"use strict";
const Constants = require ("../../../Constants");
const ShanodinDryadsBase = require("../set6ED/ShanodinDryads");

class ShanodinDryads extends ShanodinDryadsBase {
  constructor(game) {
    super(game, "Shanodin Dryads", "Revised Edition", "3ED");
  }
}

module.exports = ShanodinDryads;
