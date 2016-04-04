"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FolkMedicine extends Card {
  constructor(game) {
    super(game, "Folk Medicine", "Judgment", "JUD");
  }
}

module.exports = FolkMedicine;
