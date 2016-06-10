"use strict";
const Constants = require ("../../../Constants");
const CuriosityBase = require("../set8ED/Curiosity");

class Curiosity extends CuriosityBase {
  constructor (game) {
    super(game, "Curiosity", "Tempest Remastered", "TPR");
  }
}

module.exports = Curiosity;
