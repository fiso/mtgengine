"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElfhameDruid extends UnimplementedCard {
  constructor (game) {
    super(game, "Elfhame Druid", "Dominaria", "DOM");
  }
}

module.exports = ElfhameDruid;
