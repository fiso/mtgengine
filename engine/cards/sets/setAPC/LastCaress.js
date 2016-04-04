"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LastCaress extends Card {
  constructor(game) {
    super(game, "Last Caress", "Apocalypse", "APC");
  }
}

module.exports = LastCaress;
