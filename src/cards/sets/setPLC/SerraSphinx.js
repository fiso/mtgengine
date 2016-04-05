"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerraSphinx extends UnimplementedCard {
  constructor(game) {
    super(game, "Serra Sphinx", "Planar Chaos", "PLC");
  }
}

module.exports = SerraSphinx;
