"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HailofArrowsBase = require("../setSOK/HailofArrows.js");

class HailofArrows extends HailofArrowsBase {
  constructor(game) {
    super(game, "Hail of Arrows", "Tenth Edition", "10E");
  }
}

module.exports = HailofArrows;
