"use strict";
const Constants = require ("../../../Constants");
const StarofExtinctionBase = require("../setXLN/StarofExtinction");

class StarofExtinction extends StarofExtinctionBase {
  constructor (game) {
    super(game, "Star of Extinction", "Ixalan Promos", "PXLN");
  }
}

module.exports = StarofExtinction;
