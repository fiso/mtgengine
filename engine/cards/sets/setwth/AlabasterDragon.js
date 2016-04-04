"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AlabasterDragonBase = require("../setPOR/AlabasterDragon.js");

class AlabasterDragon extends AlabasterDragonBase {
  constructor(game) {
    super(game, "Alabaster Dragon", "Weatherlight", "WTH");
  }
}

module.exports = AlabasterDragon;
