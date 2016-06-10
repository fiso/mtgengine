"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreadDrone extends UnimplementedCard {
  constructor (game) {
    super(game, "Dread Drone", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = DreadDrone;
