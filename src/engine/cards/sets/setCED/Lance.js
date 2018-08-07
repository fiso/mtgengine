"use strict";
const Constants = require ("../../../Constants");
const LanceBase = require("../setSUM/Lance");

class Lance extends LanceBase {
  constructor (game) {
    super(game, "Lance", "Collectors’ Edition", "CED");
  }
}

module.exports = Lance;
