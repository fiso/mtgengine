"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DreadDrone extends Card {
  constructor(game) {
    super(game, "Dread Drone", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = DreadDrone;
