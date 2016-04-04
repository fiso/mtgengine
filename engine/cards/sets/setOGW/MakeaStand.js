"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MakeaStand extends Card {
  constructor(game) {
    super(game, "Make a Stand", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = MakeaStand;
