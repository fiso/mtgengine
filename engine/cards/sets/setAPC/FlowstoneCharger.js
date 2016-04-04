"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlowstoneCharger extends UnimplementedCard {
  constructor(game) {
    super(game, "Flowstone Charger", "Apocalypse", "APC");
  }
}

module.exports = FlowstoneCharger;
