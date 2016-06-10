"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YavimayaBarbarian extends UnimplementedCard {
  constructor (game) {
    super(game, "Yavimaya Barbarian", "Invasion", "INV");
  }
}

module.exports = YavimayaBarbarian;
