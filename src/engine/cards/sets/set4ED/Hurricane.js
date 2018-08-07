"use strict";
const Constants = require ("../../../Constants");
const HurricaneBase = require("../set10E/Hurricane");

class Hurricane extends HurricaneBase {
  constructor (game) {
    super(game, "Hurricane", "Fourth Edition", "4ED");
  }
}

module.exports = Hurricane;
