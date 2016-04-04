"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThoughtcutterAgent extends Card {
  constructor(game) {
    super(game, "Thoughtcutter Agent", "Shards of Alara", "ALA");
  }
}

module.exports = ThoughtcutterAgent;
