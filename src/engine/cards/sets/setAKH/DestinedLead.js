"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DestinedLead extends UnimplementedCard {
  constructor (game) {
    super(game, "Destined // Lead", "Amonkhet", "AKH");
  }
}

module.exports = DestinedLead;
