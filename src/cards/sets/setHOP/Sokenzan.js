"use strict";
const Constants = require ("../../../Constants");
const SokenzanBase = require("../setPCA/Sokenzan");

class Sokenzan extends SokenzanBase {
  constructor (game) {
    super(game, "Sokenzan", "Planechase", "HOP");
  }
}

module.exports = Sokenzan;
