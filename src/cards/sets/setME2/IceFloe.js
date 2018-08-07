"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IceFloe extends UnimplementedCard {
  constructor (game) {
    super(game, "Ice Floe", "Masters Edition II", "ME2");
  }
}

module.exports = IceFloe;
