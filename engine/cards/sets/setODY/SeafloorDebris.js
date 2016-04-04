"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeafloorDebris extends Card {
  constructor(game) {
    super(game, "Seafloor Debris", "Odyssey", "ODY");
  }
}

module.exports = SeafloorDebris;
