"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DevourFlesh extends UnimplementedCard {
  constructor (game) {
    super(game, "Devour Flesh", "Gatecrash", "GTC");
  }
}

module.exports = DevourFlesh;
