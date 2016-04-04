"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SynchronousSliver extends Card {
  constructor(game) {
    super(game, "Synchronous Sliver", "Planar Chaos", "PLC");
  }
}

module.exports = SynchronousSliver;
