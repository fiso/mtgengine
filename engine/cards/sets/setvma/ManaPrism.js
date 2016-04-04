"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ManaPrismBase = require("../set6ED/ManaPrism.js");

class ManaPrism extends ManaPrismBase {
  constructor(game) {
    super(game, "Mana Prism", "Vintage Masters", "VMA");
  }
}

module.exports = ManaPrism;
