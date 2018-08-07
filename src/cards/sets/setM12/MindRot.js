"use strict";
const Constants = require ("../../../Constants");
const MindRotBase = require("../setM19/MindRot");

class MindRot extends MindRotBase {
  constructor (game) {
    super(game, "Mind Rot", "Magic 2012", "M12");
  }
}

module.exports = MindRot;
