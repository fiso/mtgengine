"use strict";
const Constants = require ("../../../Constants");
const ShanodinDryadsBase = require("../set6ED/ShanodinDryads");

class ShanodinDryads extends ShanodinDryadsBase {
  constructor(game) {
    super(game, "Shanodin Dryads", "Unlimited Edition", "2ED");
  }
}

module.exports = ShanodinDryads;
