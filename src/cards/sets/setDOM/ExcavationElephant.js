"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExcavationElephant extends UnimplementedCard {
  constructor (game) {
    super(game, "Excavation Elephant", "Dominaria", "DOM");
  }
}

module.exports = ExcavationElephant;
