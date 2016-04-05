"use strict";
const Constants = require ("../../../Constants");
const BayouBase = require("../setCED/Bayou");

class Bayou extends BayouBase {
  constructor(game) {
    super(game, "Bayou", "Revised Edition", "3ED");
  }
}

module.exports = Bayou;
