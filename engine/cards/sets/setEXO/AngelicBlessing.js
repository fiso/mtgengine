"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AngelicBlessing extends Card {
  constructor(game) {
    super(game, "Angelic Blessing", "Exodus", "EXO");
  }
}

module.exports = AngelicBlessing;
