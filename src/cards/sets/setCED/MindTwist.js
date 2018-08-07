"use strict";
const Constants = require ("../../../Constants");
const MindTwistBase = require("../setMP2/MindTwist");

class MindTwist extends MindTwistBase {
  constructor (game) {
    super(game, "Mind Twist", "Collectors’ Edition", "CED");
  }
}

module.exports = MindTwist;
