"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SynchronousSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Synchronous Sliver", "Planar Chaos", "PLC");
  }
}

module.exports = SynchronousSliver;
