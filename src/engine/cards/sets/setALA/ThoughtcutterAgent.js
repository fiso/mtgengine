"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThoughtcutterAgent extends UnimplementedCard {
  constructor (game) {
    super(game, "Thoughtcutter Agent", "Shards of Alara", "ALA");
  }
}

module.exports = ThoughtcutterAgent;
