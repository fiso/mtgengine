"use strict";
const Constants = require ("../../../Constants");
const HurricaneBase = require("../setATH/Hurricane");

class Hurricane extends HurricaneBase {
  constructor (game) {
    super(game, "Hurricane", "Seventh Edition", "7ED");
  }
}

module.exports = Hurricane;
