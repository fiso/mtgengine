"use strict";
const Constants = require ("../../../Constants");
const HurricaneBase = require("../setATH/Hurricane");

class Hurricane extends HurricaneBase {
  constructor (game) {
    super(game, "Hurricane", "Fifth Edition", "5ED");
  }
}

module.exports = Hurricane;
