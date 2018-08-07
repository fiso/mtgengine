"use strict";
const Constants = require ("../../../Constants");
const TundraBase = require("../setVMA/Tundra");

class Tundra extends TundraBase {
  constructor (game) {
    super(game, "Tundra", "Legacy Championship", "OLGC");
  }
}

module.exports = Tundra;
