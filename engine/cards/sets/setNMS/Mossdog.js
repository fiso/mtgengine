"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mossdog extends Card {
  constructor(game) {
    super(game, "Mossdog", "Nemesis", "NMS");
  }
}

module.exports = Mossdog;
