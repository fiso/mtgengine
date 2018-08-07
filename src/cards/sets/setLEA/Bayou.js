"use strict";
const Constants = require ("../../../Constants");
const BayouBase = require("../setVMA/Bayou");

class Bayou extends BayouBase {
  constructor (game) {
    super(game, "Bayou", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Bayou;
