"use strict";
const Constants = require ("../../../Constants");
const LanceBase = require("../setCED/Lance");

class Lance extends LanceBase {
  constructor (game) {
    super(game, "Lance", "Limited Edition Beta", "LEB");
  }
}

module.exports = Lance;
