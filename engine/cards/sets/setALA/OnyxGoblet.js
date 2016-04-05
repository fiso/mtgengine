"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OnyxGoblet extends UnimplementedCard {
  constructor(game) {
    super(game, "Onyx Goblet", "Shards of Alara", "ALA");
  }
}

module.exports = OnyxGoblet;
