"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BannersRaised extends Card {
  constructor(game) {
    super(game, "Banners Raised", "Avacyn Restored", "AVR");
  }
}

module.exports = BannersRaised;
