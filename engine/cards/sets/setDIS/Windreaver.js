"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Windreaver extends Card {
  constructor(game) {
    super(game, "Windreaver", "Dissension", "DIS");
  }
}

module.exports = Windreaver;
