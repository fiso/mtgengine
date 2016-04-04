"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LastStand extends Card {
  constructor(game) {
    super(game, "Last Stand", "Apocalypse", "APC");
  }
}

module.exports = LastStand;
