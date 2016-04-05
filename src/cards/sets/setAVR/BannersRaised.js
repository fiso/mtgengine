"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BannersRaised extends UnimplementedCard {
  constructor(game) {
    super(game, "Banners Raised", "Avacyn Restored", "AVR");
  }
}

module.exports = BannersRaised;
