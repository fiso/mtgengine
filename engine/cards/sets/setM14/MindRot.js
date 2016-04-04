"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MindRotBase = require("../setDTK/MindRot.js");

class MindRot extends MindRotBase {
  constructor(game) {
    super(game, "Mind Rot", "Magic 2014 Core Set", "M14");
  }
}

module.exports = MindRot;
