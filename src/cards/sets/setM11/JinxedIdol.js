"use strict";
const Constants = require ("../../../Constants");
const JinxedIdolBase = require("../setTPR/JinxedIdol");

class JinxedIdol extends JinxedIdolBase {
  constructor (game) {
    super(game, "Jinxed Idol", "Magic 2011", "M11");
  }
}

module.exports = JinxedIdol;
