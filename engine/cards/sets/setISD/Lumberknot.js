"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Lumberknot extends Card {
  constructor(game) {
    super(game, "Lumberknot", "Innistrad", "ISD");
  }
}

module.exports = Lumberknot;
