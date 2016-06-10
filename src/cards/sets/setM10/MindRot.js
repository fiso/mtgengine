"use strict";
const Constants = require ("../../../Constants");
const MindRotBase = require("../setDTK/MindRot");

class MindRot extends MindRotBase {
  constructor (game) {
    super(game, "Mind Rot", "Magic 2010", "M10");
  }
}

module.exports = MindRot;
