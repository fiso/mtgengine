"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TundraBase = require("../setCED/Tundra.js");

class Tundra extends TundraBase {
  constructor(game) {
    super(game, "Tundra", "Vintage Masters", "VMA");
  }
}

module.exports = Tundra;
