"use strict";
const Constants = require ("../../../Constants");
const GuileBase = require("../setDD3_JVC/Guile");

class Guile extends GuileBase {
  constructor (game) {
    super(game, "Guile", "Lorwyn", "LRW");
  }
}

module.exports = Guile;
