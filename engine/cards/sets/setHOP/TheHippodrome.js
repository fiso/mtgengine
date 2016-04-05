"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheHippodrome extends UnimplementedCard {
  constructor(game) {
    super(game, "The Hippodrome", "Planechase", "HOP");
  }
}

module.exports = TheHippodrome;
