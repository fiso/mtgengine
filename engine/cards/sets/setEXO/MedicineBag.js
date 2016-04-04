"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MedicineBag extends Card {
  constructor(game) {
    super(game, "Medicine Bag", "Exodus", "EXO");
  }
}

module.exports = MedicineBag;
