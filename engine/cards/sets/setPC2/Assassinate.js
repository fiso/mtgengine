"use strict";
const Constants = require ("../../../Constants");
const AssassinateBase = require("../setM10/Assassinate");

class Assassinate extends AssassinateBase {
  constructor(game) {
    super(game, "Assassinate", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Assassinate;
