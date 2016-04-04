"use strict";
const Constants = require ("../../../Constants");
const MindFuneralBase = require("../setARB/MindFuneral");

class MindFuneral extends MindFuneralBase {
  constructor(game) {
    super(game, "Mind Funeral", "Modern Masters", "MMA");
  }
}

module.exports = MindFuneral;
