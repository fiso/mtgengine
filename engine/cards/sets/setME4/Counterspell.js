"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CounterspellBase = require("../setBRB/Counterspell.js");

class Counterspell extends CounterspellBase {
  constructor(game) {
    super(game, "Counterspell", "Masters Edition IV", "ME4");
  }
}

module.exports = Counterspell;
