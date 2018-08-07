"use strict";
const Constants = require ("../../../Constants");
const MindRotBase = require("../setM19/MindRot");

class MindRot extends MindRotBase {
  constructor (game) {
    super(game, "Mind Rot", "Welcome Deck 2016", "W16");
  }
}

module.exports = MindRot;
