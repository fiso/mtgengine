"use strict";
const Constants = require ("../../../Constants");
const HonoredHierarchBase = require("../setCP3/HonoredHierarch");

class HonoredHierarch extends HonoredHierarchBase {
  constructor (game) {
    super(game, "Honored Hierarch", "Magic Online Promos", "PRM");
  }
}

module.exports = HonoredHierarch;
