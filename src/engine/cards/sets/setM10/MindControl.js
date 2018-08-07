"use strict";
const Constants = require ("../../../Constants");
const MindControlBase = require("../setM12/MindControl");

class MindControl extends MindControlBase {
  constructor (game) {
    super(game, "Mind Control", "Magic 2010", "M10");
  }
}

module.exports = MindControl;
