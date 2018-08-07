"use strict";
const Constants = require ("../../../Constants");
const PendelhavenBase = require("../setA25/Pendelhaven");

class Pendelhaven extends PendelhavenBase {
  constructor (game) {
    super(game, "Pendelhaven", "Anthologies", "ATH");
  }
}

module.exports = Pendelhaven;
