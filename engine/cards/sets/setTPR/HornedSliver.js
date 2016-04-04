"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HornedSliverBase = require("../setTMP/HornedSliver.js");

class HornedSliver extends HornedSliverBase {
  constructor(game) {
    super(game, "Horned Sliver", "Tempest Remastered", "TPR");
  }
}

module.exports = HornedSliver;
