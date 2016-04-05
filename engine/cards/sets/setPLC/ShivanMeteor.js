"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShivanMeteor extends UnimplementedCard {
  constructor(game) {
    super(game, "Shivan Meteor", "Planar Chaos", "PLC");
  }
}

module.exports = ShivanMeteor;
