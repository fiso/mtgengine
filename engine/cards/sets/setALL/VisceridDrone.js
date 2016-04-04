"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VisceridDrone extends Card {
  constructor(game) {
    super(game, "Viscerid Drone", "Alliances", "ALL");
  }
}

module.exports = VisceridDrone;
