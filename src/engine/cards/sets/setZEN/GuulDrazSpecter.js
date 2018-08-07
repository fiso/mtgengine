"use strict";
const Constants = require ("../../../Constants");
const GuulDrazSpecterBase = require("../setCN2/GuulDrazSpecter");

class GuulDrazSpecter extends GuulDrazSpecterBase {
  constructor (game) {
    super(game, "Guul Draz Specter", "Zendikar", "ZEN");
  }
}

module.exports = GuulDrazSpecter;
