"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MindControlBase = require("../setDPA/MindControl.js");

class MindControl extends MindControlBase {
  constructor(game) {
    super(game, "Mind Control", "WPN and Gateway", "pWPN");
  }
}

module.exports = MindControl;
