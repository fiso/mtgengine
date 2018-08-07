"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YavimayaKavu extends UnimplementedCard {
  constructor (game) {
    super(game, "Yavimaya Kavu", "Invasion", "INV");
  }
}

module.exports = YavimayaKavu;
