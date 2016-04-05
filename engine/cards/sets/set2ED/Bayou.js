"use strict";
const Constants = require ("../../../Constants");
const BayouBase = require("../setCED/Bayou");

class Bayou extends BayouBase {
  constructor(game) {
    super(game, "Bayou", "Unlimited Edition", "2ED");
  }
}

module.exports = Bayou;
