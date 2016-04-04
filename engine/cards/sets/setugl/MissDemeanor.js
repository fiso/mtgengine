"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MissDemeanor extends Card {
  constructor(game) {
    super(game, "Miss Demeanor", "Unglued", "UGL");
  }
}

module.exports = MissDemeanor;
