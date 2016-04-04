"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MantisRider extends Card {
  constructor(game) {
    super(game, "Mantis Rider", "Khans of Tarkir", "KTK");
  }
}

module.exports = MantisRider;
