"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DenyReality extends Card {
  constructor(game) {
    super(game, "Deny Reality", "Alara Reborn", "ARB");
  }
}

module.exports = DenyReality;
