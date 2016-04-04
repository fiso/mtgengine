"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MindRotBase = require("../setDTK/MindRot.js");

class MindRot extends MindRotBase {
  constructor(game) {
    super(game, "Mind Rot", "Magic 2011", "M11");
  }
}

module.exports = MindRot;
