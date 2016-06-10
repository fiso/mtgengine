"use strict";
const Constants = require ("../../../Constants");
const HurricaneBase = require("../setATH/Hurricane");

class Hurricane extends HurricaneBase {
  constructor (game) {
    super(game, "Hurricane", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Hurricane;
