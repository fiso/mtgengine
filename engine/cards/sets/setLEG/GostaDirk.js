"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GostaDirk extends Card {
  constructor(game) {
    super(game, "Gosta Dirk", "Legends", "LEG");
  }
}

module.exports = GostaDirk;
