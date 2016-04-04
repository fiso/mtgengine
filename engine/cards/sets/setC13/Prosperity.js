"use strict";
const Constants = require ("../../../Constants");
const ProsperityBase = require("../set6ED/Prosperity");

class Prosperity extends ProsperityBase {
  constructor(game) {
    super(game, "Prosperity", "Commander 2013 Edition", "C13");
  }
}

module.exports = Prosperity;
