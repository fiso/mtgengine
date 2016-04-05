"use strict";
const Constants = require ("../../../Constants");
const MindTwistBase = require("../setCED/MindTwist");

class MindTwist extends MindTwistBase {
  constructor(game) {
    super(game, "Mind Twist", "Unlimited Edition", "2ED");
  }
}

module.exports = MindTwist;
