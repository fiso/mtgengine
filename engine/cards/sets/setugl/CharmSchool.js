"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CharmSchool extends Card {
  constructor(game) {
    super(game, "Charm School", "Unglued", "UGL");
  }
}

module.exports = CharmSchool;
