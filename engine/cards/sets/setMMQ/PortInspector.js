"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PortInspector extends Card {
  constructor(game) {
    super(game, "Port Inspector", "Mercadian Masques", "MMQ");
  }
}

module.exports = PortInspector;
