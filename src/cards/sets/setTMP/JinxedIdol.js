"use strict";
const Constants = require ("../../../Constants");
const JinxedIdolBase = require("../setTPR/JinxedIdol");

class JinxedIdol extends JinxedIdolBase {
  constructor (game) {
    super(game, "Jinxed Idol", "Tempest", "TMP");
  }
}

module.exports = JinxedIdol;
