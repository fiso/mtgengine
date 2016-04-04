"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AlabornTrooperBase = require("../setME4/AlabornTrooper.js");

class AlabornTrooper extends AlabornTrooperBase {
  constructor(game) {
    super(game, "Alaborn Trooper", "Portal Second Age", "PO2");
  }
}

module.exports = AlabornTrooper;
