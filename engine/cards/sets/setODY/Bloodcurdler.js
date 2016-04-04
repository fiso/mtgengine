"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Bloodcurdler extends Card {
  constructor(game) {
    super(game, "Bloodcurdler", "Odyssey", "ODY");
  }
}

module.exports = Bloodcurdler;
