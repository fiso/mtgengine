"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VictualSliverBase = require("../setH09/VictualSliver.js");

class VictualSliver extends VictualSliverBase {
  constructor(game) {
    super(game, "Victual Sliver", "Stronghold", "STH");
  }
}

module.exports = VictualSliver;
