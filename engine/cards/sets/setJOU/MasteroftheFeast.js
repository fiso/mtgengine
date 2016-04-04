"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MasteroftheFeast extends Card {
  constructor(game) {
    super(game, "Master of the Feast", "Journey into Nyx", "JOU");
  }
}

module.exports = MasteroftheFeast;
