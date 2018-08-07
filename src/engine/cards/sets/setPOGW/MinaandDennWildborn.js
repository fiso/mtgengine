"use strict";
const Constants = require ("../../../Constants");
const MinaandDennWildbornBase = require("../setOGW/MinaandDennWildborn");

class MinaandDennWildborn extends MinaandDennWildbornBase {
  constructor (game) {
    super(game, "Mina and Denn, Wildborn", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = MinaandDennWildborn;
