"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrimDiscovery extends UnimplementedCard {
  constructor(game) {
    super(game, "Grim Discovery", "Zendikar", "ZEN");
  }
}

module.exports = GrimDiscovery;
