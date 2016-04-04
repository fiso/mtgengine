"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChieftainenDal extends Card {
  constructor(game) {
    super(game, "Chieftain en-Dal", "Nemesis", "NMS");
  }
}

module.exports = ChieftainenDal;
