"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MindRotBase = require("../setDTK/MindRot.js");

class MindRot extends MindRotBase {
  constructor(game) {
    super(game, "Mind Rot", "Portal Second Age", "PO2");
  }
}

module.exports = MindRot;
