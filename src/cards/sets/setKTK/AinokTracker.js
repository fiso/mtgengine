"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AinokTracker extends UnimplementedCard {
  constructor (game) {
    super(game, "Ainok Tracker", "Khans of Tarkir", "KTK");
  }
}

module.exports = AinokTracker;
