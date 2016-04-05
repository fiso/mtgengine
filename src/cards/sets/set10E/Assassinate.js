"use strict";
const Constants = require ("../../../Constants");
const AssassinateBase = require("../setM10/Assassinate");

class Assassinate extends AssassinateBase {
  constructor(game) {
    super(game, "Assassinate", "Tenth Edition", "10E");
  }
}

module.exports = Assassinate;
