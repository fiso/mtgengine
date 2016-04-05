"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RottingFensnake extends UnimplementedCard {
  constructor(game) {
    super(game, "Rotting Fensnake", "Innistrad", "ISD");
  }
}

module.exports = RottingFensnake;
