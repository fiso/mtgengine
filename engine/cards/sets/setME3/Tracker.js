"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tracker extends UnimplementedCard {
  constructor(game) {
    super(game, "Tracker", "Masters Edition III", "ME3");
  }
}

module.exports = Tracker;
