"use strict";
const Constants = require ("../../../Constants");
const BrowbeatBase = require("../setDDK/Browbeat");

class Browbeat extends BrowbeatBase {
  constructor(game) {
    super(game, "Browbeat", "Planechase", "HOP");
  }
}

module.exports = Browbeat;
