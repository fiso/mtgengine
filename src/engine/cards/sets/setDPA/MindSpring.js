"use strict";
const Constants = require ("../../../Constants");
const MindSpringBase = require("../setDDT/MindSpring");

class MindSpring extends MindSpringBase {
  constructor (game) {
    super(game, "Mind Spring", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = MindSpring;
