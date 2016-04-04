"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Tithe extends Card {
  constructor(game) {
    super(game, "Tithe", "Visions", "VIS");
  }
}

module.exports = Tithe;
