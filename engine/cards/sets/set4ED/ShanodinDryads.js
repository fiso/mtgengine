"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShanodinDryadsBase = require("../set6ED/ShanodinDryads.js");

class ShanodinDryads extends ShanodinDryadsBase {
  constructor(game) {
    super(game, "Shanodin Dryads", "Fourth Edition", "4ED");
  }
}

module.exports = ShanodinDryads;
