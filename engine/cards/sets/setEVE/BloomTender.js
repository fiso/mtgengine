"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloomTender extends UnimplementedCard {
  constructor(game) {
    super(game, "Bloom Tender", "Eventide", "EVE");
  }
}

module.exports = BloomTender;
