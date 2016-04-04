"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Carom extends Card {
  constructor(game) {
    super(game, "Carom", "Dissension", "DIS");
  }
}

module.exports = Carom;
