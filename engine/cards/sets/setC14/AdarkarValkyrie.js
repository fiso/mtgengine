"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AdarkarValkyrieBase = require("../setCSP/AdarkarValkyrie.js");

class AdarkarValkyrie extends AdarkarValkyrieBase {
  constructor(game) {
    super(game, "Adarkar Valkyrie", "Commander 2014", "C14");
  }
}

module.exports = AdarkarValkyrie;
