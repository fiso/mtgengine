"use strict";
const Constants = require ("../../../Constants");
const BayouBase = require("../setVMA/Bayou");

class Bayou extends BayouBase {
  constructor (game) {
    super(game, "Bayou", "Collectors’ Edition", "CED");
  }
}

module.exports = Bayou;
