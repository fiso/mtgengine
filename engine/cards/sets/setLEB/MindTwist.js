"use strict";
const Constants = require ("../../../Constants");
const MindTwistBase = require("../setCED/MindTwist");

class MindTwist extends MindTwistBase {
  constructor(game) {
    super(game, "Mind Twist", "Limited Edition Beta", "LEB");
  }
}

module.exports = MindTwist;
