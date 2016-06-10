"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OpalGuardian extends UnimplementedCard {
  constructor (game) {
    super(game, "Opal Guardian", "Time Spiral", "TSP");
  }
}

module.exports = OpalGuardian;
