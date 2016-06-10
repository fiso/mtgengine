"use strict";
const Constants = require ("../../../Constants");
const HailofArrowsBase = require("../setSOK/HailofArrows");

class HailofArrows extends HailofArrowsBase {
  constructor (game) {
    super(game, "Hail of Arrows", "Tenth Edition", "10E");
  }
}

module.exports = HailofArrows;
