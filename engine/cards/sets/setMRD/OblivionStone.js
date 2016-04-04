"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OblivionStoneBase = require("../setCMD/OblivionStone.js");

class OblivionStone extends OblivionStoneBase {
  constructor(game) {
    super(game, "Oblivion Stone", "Mirrodin", "MRD");
  }
}

module.exports = OblivionStone;
