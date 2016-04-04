"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NyxbornRollicker extends Card {
  constructor(game) {
    super(game, "Nyxborn Rollicker", "Born of the Gods", "BNG");
  }
}

module.exports = NyxbornRollicker;
