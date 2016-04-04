"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AlterReality extends Card {
  constructor(game) {
    super(game, "Alter Reality", "Torment", "TOR");
  }
}

module.exports = AlterReality;
