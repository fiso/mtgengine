"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HelmoftheHost extends UnimplementedCard {
  constructor (game) {
    super(game, "Helm of the Host", "Dominaria", "DOM");
  }
}

module.exports = HelmoftheHost;
