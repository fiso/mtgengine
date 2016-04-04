"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HauntingWind extends UnimplementedCard {
  constructor(game) {
    super(game, "Haunting Wind", "Antiquities", "ATQ");
  }
}

module.exports = HauntingWind;
