"use strict";
const Constants = require ("../../../Constants");
const MindControlBase = require("../setM12/MindControl");

class MindControl extends MindControlBase {
  constructor (game) {
    super(game, "Mind Control", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = MindControl;
