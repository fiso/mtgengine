"use strict";
const Constants = require ("../../../Constants");
const MindControlBase = require("../setDPA/MindControl");

class MindControl extends MindControlBase {
  constructor(game) {
    super(game, "Mind Control", "WPN and Gateway", "pWPN");
  }
}

module.exports = MindControl;
