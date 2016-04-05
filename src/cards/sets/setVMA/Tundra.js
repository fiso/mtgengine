"use strict";
const Constants = require ("../../../Constants");
const TundraBase = require("../setCED/Tundra");

class Tundra extends TundraBase {
  constructor(game) {
    super(game, "Tundra", "Vintage Masters", "VMA");
  }
}

module.exports = Tundra;
