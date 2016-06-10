"use strict";
const Constants = require ("../../../Constants");
const MindTwistBase = require("../setCED/MindTwist");

class MindTwist extends MindTwistBase {
  constructor (game) {
    super(game, "Mind Twist", "Limited Edition Alpha", "LEA");
  }
}

module.exports = MindTwist;
