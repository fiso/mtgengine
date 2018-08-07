"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SylvokReplica extends UnimplementedCard {
  constructor (game) {
    super(game, "Sylvok Replica", "Scars of Mirrodin", "SOM");
  }
}

module.exports = SylvokReplica;
