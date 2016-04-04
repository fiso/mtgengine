"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RathiFiend extends Card {
  constructor(game) {
    super(game, "Rathi Fiend", "Nemesis", "NMS");
  }
}

module.exports = RathiFiend;
