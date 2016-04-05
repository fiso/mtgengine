"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PoulticeSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Poultice Sliver", "Planar Chaos", "PLC");
  }
}

module.exports = PoulticeSliver;
