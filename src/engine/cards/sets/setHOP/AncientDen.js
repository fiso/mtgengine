"use strict";
const Constants = require ("../../../Constants");
const AncientDenBase = require("../setTD2/AncientDen");

class AncientDen extends AncientDenBase {
  constructor (game) {
    super(game, "Ancient Den", "Planechase", "HOP");
  }
}

module.exports = AncientDen;
