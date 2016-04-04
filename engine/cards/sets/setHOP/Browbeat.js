"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrowbeatBase = require("../setDDK/Browbeat.js");

class Browbeat extends BrowbeatBase {
  constructor(game) {
    super(game, "Browbeat", "Planechase", "HOP");
  }
}

module.exports = Browbeat;
