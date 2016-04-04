"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StampedeDriver extends Card {
  constructor(game) {
    super(game, "Stampede Driver", "Nemesis", "NMS");
  }
}

module.exports = StampedeDriver;
