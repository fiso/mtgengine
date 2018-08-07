"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HurloonShaman extends UnimplementedCard {
  constructor (game) {
    super(game, "Hurloon Shaman", "Weatherlight", "WTH");
  }
}

module.exports = HurloonShaman;
