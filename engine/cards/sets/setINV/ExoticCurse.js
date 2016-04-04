"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ExoticCurseBase = require("../setDDE/ExoticCurse.js");

class ExoticCurse extends ExoticCurseBase {
  constructor(game) {
    super(game, "Exotic Curse", "Invasion", "INV");
  }
}

module.exports = ExoticCurse;
