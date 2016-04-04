"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HungeringYeti extends Card {
  constructor(game) {
    super(game, "Hungering Yeti", "Fate Reforged", "FRF");
  }
}

module.exports = HungeringYeti;
