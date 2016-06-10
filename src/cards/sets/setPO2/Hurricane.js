"use strict";
const Constants = require ("../../../Constants");
const HurricaneBase = require("../setATH/Hurricane");

class Hurricane extends HurricaneBase {
  constructor (game) {
    super(game, "Hurricane", "Portal Second Age", "PO2");
  }
}

module.exports = Hurricane;
