"use strict";
const Constants = require ("../../../Constants");
const MindSculptBase = require("../setM13/MindSculpt");

class MindSculpt extends MindSculptBase {
  constructor (game) {
    super(game, "Mind Sculpt", "Magic 2015 Core Set", "M15");
  }
}

module.exports = MindSculpt;
