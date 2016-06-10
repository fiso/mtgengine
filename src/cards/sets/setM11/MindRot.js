"use strict";
const Constants = require ("../../../Constants");
const MindRotBase = require("../setDTK/MindRot");

class MindRot extends MindRotBase {
  constructor (game) {
    super(game, "Mind Rot", "Magic 2011", "M11");
  }
}

module.exports = MindRot;
