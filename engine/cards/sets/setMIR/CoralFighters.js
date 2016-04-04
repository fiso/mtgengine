"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CoralFightersBase = require("../setDDI/CoralFighters.js");

class CoralFighters extends CoralFightersBase {
  constructor(game) {
    super(game, "Coral Fighters", "Mirage", "MIR");
  }
}

module.exports = CoralFighters;
