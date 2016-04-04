"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinGoonBase = require("../setLGN/GoblinGoon.js");

class GoblinGoon extends GoblinGoonBase {
  constructor(game) {
    super(game, "Goblin Goon", "Vintage Masters", "VMA");
  }
}

module.exports = GoblinGoon;
