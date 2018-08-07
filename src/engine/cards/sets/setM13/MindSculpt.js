"use strict";
const Constants = require ("../../../Constants");
const MindSculptBase = require("../setM15/MindSculpt");

class MindSculpt extends MindSculptBase {
  constructor (game) {
    super(game, "Mind Sculpt", "Magic 2013", "M13");
  }
}

module.exports = MindSculpt;
