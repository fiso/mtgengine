"use strict";
const Constants = require ("../../../Constants");
const MindTwistBase = require("../setMP2/MindTwist");

class MindTwist extends MindTwistBase {
  constructor (game) {
    super(game, "Mind Twist", "Masters Edition III", "ME3");
  }
}

module.exports = MindTwist;
