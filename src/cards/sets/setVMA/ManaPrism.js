"use strict";
const Constants = require ("../../../Constants");
const ManaPrismBase = require("../set6ED/ManaPrism");

class ManaPrism extends ManaPrismBase {
  constructor(game) {
    super(game, "Mana Prism", "Vintage Masters", "VMA");
  }
}

module.exports = ManaPrism;
