"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IceFloe extends UnimplementedCard {
  constructor(game) {
    super(game, "Ice Floe", "Fifth Edition", "5ED");
  }
}

module.exports = IceFloe;
