"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PortInspector extends UnimplementedCard {
  constructor(game) {
    super(game, "Port Inspector", "Mercadian Masques", "MMQ");
  }
}

module.exports = PortInspector;
