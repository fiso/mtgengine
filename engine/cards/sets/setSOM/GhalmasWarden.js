"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhalmasWarden extends Card {
  constructor(game) {
    super(game, "Ghalma's Warden", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GhalmasWarden;
