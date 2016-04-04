"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlazingEffigy extends Card {
  constructor(game) {
    super(game, "Blazing Effigy", "Legends", "LEG");
  }
}

module.exports = BlazingEffigy;
