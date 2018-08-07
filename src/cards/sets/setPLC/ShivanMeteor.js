"use strict";
const Constants = require ("../../../Constants");
const ShivanMeteorBase = require("../setDDS/ShivanMeteor");

class ShivanMeteor extends ShivanMeteorBase {
  constructor (game) {
    super(game, "Shivan Meteor", "Planar Chaos", "PLC");
  }
}

module.exports = ShivanMeteor;
