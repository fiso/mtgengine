"use strict";
const Constants = require ("../../../Constants");
const HurricaneBase = require("../setATH/Hurricane");

class Hurricane extends HurricaneBase {
  constructor(game) {
    super(game, "Hurricane", "International Collector's Edition", "CEI");
  }
}

module.exports = Hurricane;
