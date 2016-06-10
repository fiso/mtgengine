"use strict";
const Constants = require ("../../../Constants");
const GuulDrazAssassinBase = require("../setpMEI/GuulDrazAssassin");

class GuulDrazAssassin extends GuulDrazAssassinBase {
  constructor (game) {
    super(game, "Guul Draz Assassin", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = GuulDrazAssassin;
