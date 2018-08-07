"use strict";
const Constants = require ("../../../Constants");
const LanceBase = require("../setSUM/Lance");

class Lance extends LanceBase {
  constructor (game) {
    super(game, "Lance", "Unlimited Edition", "2ED");
  }
}

module.exports = Lance;
