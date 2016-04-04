"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BalefulStrixBase = require("../setC13/BalefulStrix.js");

class BalefulStrix extends BalefulStrixBase {
  constructor(game) {
    super(game, "Baleful Strix", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = BalefulStrix;
