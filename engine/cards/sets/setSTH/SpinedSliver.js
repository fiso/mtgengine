"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpinedSliverBase = require("../setH09/SpinedSliver.js");

class SpinedSliver extends SpinedSliverBase {
  constructor(game) {
    super(game, "Spined Sliver", "Stronghold", "STH");
  }
}

module.exports = SpinedSliver;
