"use strict";
const Constants = require ("../../../Constants");
const MindTwistBase = require("../setMP2/MindTwist");

class MindTwist extends MindTwistBase {
  constructor (game) {
    super(game, "Mind Twist", "Magic Online Promos", "PRM");
  }
}

module.exports = MindTwist;
