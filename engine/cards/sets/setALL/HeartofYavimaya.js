"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeartofYavimaya extends UnimplementedCard {
  constructor(game) {
    super(game, "Heart of Yavimaya", "Alliances", "ALL");
  }
}

module.exports = HeartofYavimaya;
