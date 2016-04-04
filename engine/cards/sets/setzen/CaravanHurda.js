"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CaravanHurda extends UnimplementedCard {
  constructor(game) {
    super(game, "Caravan Hurda", "Zendikar", "ZEN");
  }
}

module.exports = CaravanHurda;
