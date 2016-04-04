"use strict";
const Constants = require ("../../../Constants");
const HurricaneBase = require("../setATH/Hurricane");

class Hurricane extends HurricaneBase {
  constructor(game) {
    super(game, "Hurricane", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Hurricane;
