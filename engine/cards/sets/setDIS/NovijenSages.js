"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NovijenSages extends Card {
  constructor(game) {
    super(game, "Novijen Sages", "Dissension", "DIS");
  }
}

module.exports = NovijenSages;
