"use strict";
const Constants = require ("../../../Constants");
const MindRotBase = require("../setM19/MindRot");

class MindRot extends MindRotBase {
  constructor (game) {
    super(game, "Mind Rot", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = MindRot;
