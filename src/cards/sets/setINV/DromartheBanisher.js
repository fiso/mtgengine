"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DromartheBanisher extends UnimplementedCard {
  constructor (game) {
    super(game, "Dromar, the Banisher", "Invasion", "INV");
  }
}

module.exports = DromartheBanisher;
