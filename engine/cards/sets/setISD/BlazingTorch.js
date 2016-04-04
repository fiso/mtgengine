"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlazingTorch extends Card {
  constructor(game) {
    super(game, "Blazing Torch", "Innistrad", "ISD");
  }
}

module.exports = BlazingTorch;
