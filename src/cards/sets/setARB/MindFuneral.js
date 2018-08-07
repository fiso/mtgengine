"use strict";
const Constants = require ("../../../Constants");
const MindFuneralBase = require("../setMMA/MindFuneral");

class MindFuneral extends MindFuneralBase {
  constructor (game) {
    super(game, "Mind Funeral", "Alara Reborn", "ARB");
  }
}

module.exports = MindFuneral;
