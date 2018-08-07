"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TerritorialAllosaurus extends UnimplementedCard {
  constructor (game) {
    super(game, "Territorial Allosaurus", "Dominaria", "DOM");
  }
}

module.exports = TerritorialAllosaurus;
