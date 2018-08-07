"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiligentExcavator extends UnimplementedCard {
  constructor (game) {
    super(game, "Diligent Excavator", "Dominaria", "DOM");
  }
}

module.exports = DiligentExcavator;
