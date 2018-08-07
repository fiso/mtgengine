"use strict";
const Constants = require ("../../../Constants");
const PendelhavenBase = require("../setA25/Pendelhaven");

class Pendelhaven extends PendelhavenBase {
  constructor (game) {
    super(game, "Pendelhaven", "Friday Night Magic 2008", "F08");
  }
}

module.exports = Pendelhaven;
