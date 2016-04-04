"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GuulDrazAssassinBase = require("../setpMEI/GuulDrazAssassin.js");

class GuulDrazAssassin extends GuulDrazAssassinBase {
  constructor(game) {
    super(game, "Guul Draz Assassin", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = GuulDrazAssassin;
