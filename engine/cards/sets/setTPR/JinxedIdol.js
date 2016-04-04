"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JinxedIdolBase = require("../setM11/JinxedIdol.js");

class JinxedIdol extends JinxedIdolBase {
  constructor(game) {
    super(game, "Jinxed Idol", "Tempest Remastered", "TPR");
  }
}

module.exports = JinxedIdol;
