"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WayfaringGiant extends UnimplementedCard {
  constructor(game) {
    super(game, "Wayfaring Giant", "Invasion", "INV");
  }
}

module.exports = WayfaringGiant;
