"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ProteanHulk extends Card {
  constructor(game) {
    super(game, "Protean Hulk", "Dissension", "DIS");
  }
}

module.exports = ProteanHulk;
