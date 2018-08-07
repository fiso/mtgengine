"use strict";
const Constants = require ("../../../Constants");
const HelmoftheHostBase = require("../setDOM/HelmoftheHost");

class HelmoftheHost extends HelmoftheHostBase {
  constructor (game) {
    super(game, "Helm of the Host", "Dominaria Promos", "PDOM");
  }
}

module.exports = HelmoftheHost;
