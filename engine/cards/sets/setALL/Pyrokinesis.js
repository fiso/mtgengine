"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Pyrokinesis extends Card {
  constructor(game) {
    super(game, "Pyrokinesis", "Alliances", "ALL");
  }
}

module.exports = Pyrokinesis;
