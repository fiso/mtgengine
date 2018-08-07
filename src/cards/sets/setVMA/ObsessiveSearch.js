"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ObsessiveSearch extends UnimplementedCard {
  constructor (game) {
    super(game, "Obsessive Search", "Vintage Masters", "VMA");
  }
}

module.exports = ObsessiveSearch;
