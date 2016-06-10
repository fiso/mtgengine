"use strict";
const Constants = require ("../../../Constants");
const TundraBase = require("../setCED/Tundra");

class Tundra extends TundraBase {
  constructor (game) {
    super(game, "Tundra", "Masters Edition IV", "ME4");
  }
}

module.exports = Tundra;
