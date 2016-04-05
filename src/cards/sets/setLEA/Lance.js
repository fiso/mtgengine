"use strict";
const Constants = require ("../../../Constants");
const LanceBase = require("../setCED/Lance");

class Lance extends LanceBase {
  constructor(game) {
    super(game, "Lance", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Lance;
