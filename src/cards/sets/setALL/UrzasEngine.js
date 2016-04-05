"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrzasEngine extends UnimplementedCard {
  constructor(game) {
    super(game, "Urza's Engine", "Alliances", "ALL");
  }
}

module.exports = UrzasEngine;
