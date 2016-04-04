"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CloudCover extends Card {
  constructor(game) {
    super(game, "Cloud Cover", "Planeshift", "PLS");
  }
}

module.exports = CloudCover;
