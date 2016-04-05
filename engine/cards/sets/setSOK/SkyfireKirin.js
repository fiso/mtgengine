"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkyfireKirin extends UnimplementedCard {
  constructor(game) {
    super(game, "Skyfire Kirin", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = SkyfireKirin;
