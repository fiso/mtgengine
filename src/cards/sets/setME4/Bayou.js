"use strict";
const Constants = require ("../../../Constants");
const BayouBase = require("../setCED/Bayou");

class Bayou extends BayouBase {
  constructor(game) {
    super(game, "Bayou", "Masters Edition IV", "ME4");
  }
}

module.exports = Bayou;
