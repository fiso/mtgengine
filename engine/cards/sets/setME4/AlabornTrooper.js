"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AlabornTrooper extends Card {
  constructor(game) {
    super(game, "Alaborn Trooper", "Masters Edition IV", "ME4");
  }
}

module.exports = AlabornTrooper;
