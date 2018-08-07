"use strict";
const Constants = require ("../../../Constants");
const GuulDrazAssassinBase = require("../setPROE/GuulDrazAssassin");

class GuulDrazAssassin extends GuulDrazAssassinBase {
  constructor (game) {
    super(game, "Guul Draz Assassin", "Magic Online Promos", "PRM");
  }
}

module.exports = GuulDrazAssassin;
