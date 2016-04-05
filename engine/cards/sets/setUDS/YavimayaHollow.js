"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YavimayaHollow extends UnimplementedCard {
  constructor(game) {
    super(game, "Yavimaya Hollow", "Urza's Destiny", "UDS");
  }
}

module.exports = YavimayaHollow;
