"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeartofYavimaya extends UnimplementedCard {
  constructor (game) {
    super(game, "Heart of Yavimaya", "Masters Edition II", "ME2");
  }
}

module.exports = HeartofYavimaya;
