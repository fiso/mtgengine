"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WarleadersHelixBase = require("../setDGM/WarleadersHelix.js");

class WarleadersHelix extends WarleadersHelixBase {
  constructor(game) {
    super(game, "Warleader's Helix", "Friday Night Magic", "pFNM");
  }
}

module.exports = WarleadersHelix;
