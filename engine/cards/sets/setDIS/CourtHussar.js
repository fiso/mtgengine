"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CourtHussar extends Card {
  constructor(game) {
    super(game, "Court Hussar", "Dissension", "DIS");
  }
}

module.exports = CourtHussar;
