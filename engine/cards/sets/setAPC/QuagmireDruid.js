"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class QuagmireDruid extends Card {
  constructor(game) {
    super(game, "Quagmire Druid", "Apocalypse", "APC");
  }
}

module.exports = QuagmireDruid;
