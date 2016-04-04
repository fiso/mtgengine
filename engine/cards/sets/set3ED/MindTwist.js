"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MindTwistBase = require("../setCED/MindTwist.js");

class MindTwist extends MindTwistBase {
  constructor(game) {
    super(game, "Mind Twist", "Revised Edition", "3ED");
  }
}

module.exports = MindTwist;
