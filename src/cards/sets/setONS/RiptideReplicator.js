"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiptideReplicator extends UnimplementedCard {
  constructor (game) {
    super(game, "Riptide Replicator", "Onslaught", "ONS");
  }
}

module.exports = RiptideReplicator;
