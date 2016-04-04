"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SliverOverlordBase = require("../setH09/SliverOverlord.js");

class SliverOverlord extends SliverOverlordBase {
  constructor(game) {
    super(game, "Sliver Overlord", "Scourge", "SCG");
  }
}

module.exports = SliverOverlord;
