"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeepWatch extends UnimplementedCard {
  constructor (game) {
    super(game, "Keep Watch", "Planechase", "HOP");
  }
}

module.exports = KeepWatch;
