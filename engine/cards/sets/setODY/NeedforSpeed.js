"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NeedforSpeed extends Card {
  constructor(game) {
    super(game, "Need for Speed", "Odyssey", "ODY");
  }
}

module.exports = NeedforSpeed;
