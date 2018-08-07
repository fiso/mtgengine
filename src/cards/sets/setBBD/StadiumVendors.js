"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StadiumVendors extends UnimplementedCard {
  constructor (game) {
    super(game, "Stadium Vendors", "Battlebond", "BBD");
  }
}

module.exports = StadiumVendors;
