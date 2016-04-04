"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MindBombBase = require("../set5ED/MindBomb.js");

class MindBomb extends MindBombBase {
  constructor(game) {
    super(game, "Mind Bomb", "The Dark", "DRK");
  }
}

module.exports = MindBomb;
