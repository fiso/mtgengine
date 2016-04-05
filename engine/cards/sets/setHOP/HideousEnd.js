"use strict";
const Constants = require ("../../../Constants");
const HideousEndBase = require("../setDD3_GVL/HideousEnd");

class HideousEnd extends HideousEndBase {
  constructor(game) {
    super(game, "Hideous End", "Planechase", "HOP");
  }
}

module.exports = HideousEnd;
