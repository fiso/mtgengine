"use strict";
const Constants = require ("../../../Constants");
const LanceBase = require("../setCED/Lance");

class Lance extends LanceBase {
  constructor (game) {
    super(game, "Lance", "Revised Edition", "3ED");
  }
}

module.exports = Lance;
