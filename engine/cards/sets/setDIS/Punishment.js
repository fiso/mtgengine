"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Punishment extends Card {
  constructor(game) {
    super(game, "Punishment", "Dissension", "DIS");
  }
}

module.exports = Punishment;
