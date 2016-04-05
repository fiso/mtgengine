"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KederektLeviathan extends UnimplementedCard {
  constructor(game) {
    super(game, "Kederekt Leviathan", "Shards of Alara", "ALA");
  }
}

module.exports = KederektLeviathan;
