"use strict";
const Constants = require ("../../../Constants");
const HurricaneBase = require("../setATH/Hurricane");

class Hurricane extends HurricaneBase {
  constructor(game) {
    super(game, "Hurricane", "Tenth Edition", "10E");
  }
}

module.exports = Hurricane;
