"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SharedDiscovery extends UnimplementedCard {
  constructor(game) {
    super(game, "Shared Discovery", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SharedDiscovery;
