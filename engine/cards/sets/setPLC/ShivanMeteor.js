"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShivanMeteor extends Card {
  constructor(game) {
    super(game, "Shivan Meteor", "Planar Chaos", "PLC");
  }
}

module.exports = ShivanMeteor;
