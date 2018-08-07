"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChandrasOutburst extends UnimplementedCard {
  constructor (game) {
    super(game, "Chandra's Outburst", "Dominaria", "DOM");
  }
}

module.exports = ChandrasOutburst;
