"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MindFuneralBase = require("../setARB/MindFuneral.js");

class MindFuneral extends MindFuneralBase {
  constructor(game) {
    super(game, "Mind Funeral", "Modern Masters", "MMA");
  }
}

module.exports = MindFuneral;
