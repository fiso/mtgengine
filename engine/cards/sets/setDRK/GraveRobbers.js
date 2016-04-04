"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GraveRobbers extends Card {
  constructor(game) {
    super(game, "Grave Robbers", "The Dark", "DRK");
  }
}

module.exports = GraveRobbers;
