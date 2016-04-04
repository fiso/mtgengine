"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Boom extends UnimplementedCard {
  constructor(game) {
    super(game, "Boom", "Planar Chaos", "PLC");
  }
}

module.exports = Boom;
