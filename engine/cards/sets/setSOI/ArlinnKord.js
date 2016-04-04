"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArlinnKord extends Card {
  constructor(game) {
    super(game, "Arlinn Kord", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ArlinnKord;
