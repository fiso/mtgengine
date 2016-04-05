"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MantleofLeadership extends UnimplementedCard {
  constructor(game) {
    super(game, "Mantle of Leadership", "Planar Chaos", "PLC");
  }
}

module.exports = MantleofLeadership;
