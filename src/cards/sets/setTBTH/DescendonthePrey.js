"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DescendonthePrey extends UnimplementedCard {
  constructor (game) {
    super(game, "Descend on the Prey", "Battle the Horde", "TBTH");
  }
}

module.exports = DescendonthePrey;
