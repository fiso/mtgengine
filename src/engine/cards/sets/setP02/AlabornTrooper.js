"use strict";
const Constants = require ("../../../Constants");
const AlabornTrooperBase = require("../setME4/AlabornTrooper");

class AlabornTrooper extends AlabornTrooperBase {
  constructor (game) {
    super(game, "Alaborn Trooper", "Portal Second Age", "P02");
  }
}

module.exports = AlabornTrooper;
