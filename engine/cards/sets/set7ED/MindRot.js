"use strict";
const Constants = require ("../../../Constants");
const MindRotBase = require("../setDTK/MindRot");

class MindRot extends MindRotBase {
  constructor(game) {
    super(game, "Mind Rot", "Seventh Edition", "7ED");
  }
}

module.exports = MindRot;
