"use strict";
const Constants = require ("../../../Constants");
const ChaosMawBase = require("../setMTGA/ChaosMaw");

class ChaosMaw extends ChaosMawBase {
  constructor (game) {
    super(game, "Chaos Maw", "Hour of Devastation", "HOU");
  }
}

module.exports = ChaosMaw;
