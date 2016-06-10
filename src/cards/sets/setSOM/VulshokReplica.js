"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VulshokReplica extends UnimplementedCard {
  constructor (game) {
    super(game, "Vulshok Replica", "Scars of Mirrodin", "SOM");
  }
}

module.exports = VulshokReplica;
