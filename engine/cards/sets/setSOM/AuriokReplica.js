"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AuriokReplica extends UnimplementedCard {
  constructor(game) {
    super(game, "Auriok Replica", "Scars of Mirrodin", "SOM");
  }
}

module.exports = AuriokReplica;
