"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeoninRelicWarder extends UnimplementedCard {
  constructor(game) {
    super(game, "Leonin Relic-Warder", "Mirrodin Besieged", "MBS");
  }
}

module.exports = LeoninRelicWarder;
