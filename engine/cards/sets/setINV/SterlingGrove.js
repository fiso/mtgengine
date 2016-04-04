"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SterlingGrove extends Card {
  constructor(game) {
    super(game, "Sterling Grove", "Invasion", "INV");
  }
}

module.exports = SterlingGrove;
