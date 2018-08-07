"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerraAviary extends UnimplementedCard {
  constructor (game) {
    super(game, "Serra Aviary", "Masters Edition IV", "ME4");
  }
}

module.exports = SerraAviary;
