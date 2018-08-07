"use strict";
const Constants = require ("../../../Constants");
const LanceBase = require("../setSUM/Lance");

class Lance extends LanceBase {
  constructor (game) {
    super(game, "Lance", "Revised Edition", "3ED");
  }
}

module.exports = Lance;
