"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DromarsCavern extends UnimplementedCard {
  constructor(game) {
    super(game, "Dromar's Cavern", "Planeshift", "PLS");
  }
}

module.exports = DromarsCavern;
