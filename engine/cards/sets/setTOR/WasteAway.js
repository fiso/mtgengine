"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WasteAway extends UnimplementedCard {
  constructor(game) {
    super(game, "Waste Away", "Torment", "TOR");
  }
}

module.exports = WasteAway;
