"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ViolentOutburst extends UnimplementedCard {
  constructor(game) {
    super(game, "Violent Outburst", "Alara Reborn", "ARB");
  }
}

module.exports = ViolentOutburst;
