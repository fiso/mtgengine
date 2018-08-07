"use strict";
const Constants = require ("../../../Constants");
const MindControlBase = require("../setM12/MindControl");

class MindControl extends MindControlBase {
  constructor (game) {
    super(game, "Mind Control", "Wizards Play Network 2009", "PWP09");
  }
}

module.exports = MindControl;
