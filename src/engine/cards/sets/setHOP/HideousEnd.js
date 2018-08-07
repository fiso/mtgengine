"use strict";
const Constants = require ("../../../Constants");
const HideousEndBase = require("../setDDR/HideousEnd");

class HideousEnd extends HideousEndBase {
  constructor (game) {
    super(game, "Hideous End", "Planechase", "HOP");
  }
}

module.exports = HideousEnd;
