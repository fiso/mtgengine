"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WanderingEye extends Card {
  constructor(game) {
    super(game, "Wandering Eye", "Nemesis", "NMS");
  }
}

module.exports = WanderingEye;
