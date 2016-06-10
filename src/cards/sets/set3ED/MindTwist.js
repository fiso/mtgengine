"use strict";
const Constants = require ("../../../Constants");
const MindTwistBase = require("../setCED/MindTwist");

class MindTwist extends MindTwistBase {
  constructor (game) {
    super(game, "Mind Twist", "Revised Edition", "3ED");
  }
}

module.exports = MindTwist;
