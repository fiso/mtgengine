"use strict";
const Constants = require ("../../../Constants");
const AlabornMusketeerBase = require("../setME4/AlabornMusketeer");

class AlabornMusketeer extends AlabornMusketeerBase {
  constructor (game) {
    super(game, "Alaborn Musketeer", "Portal Second Age", "P02");
  }
}

module.exports = AlabornMusketeer;
