"use strict";
const Constants = require ("../../../Constants");
const MindBombBase = require("../set5ED/MindBomb");

class MindBomb extends MindBombBase {
  constructor(game) {
    super(game, "Mind Bomb", "Fourth Edition", "4ED");
  }
}

module.exports = MindBomb;
