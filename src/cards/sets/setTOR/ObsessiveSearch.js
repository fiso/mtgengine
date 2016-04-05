"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ObsessiveSearch extends UnimplementedCard {
  constructor(game) {
    super(game, "Obsessive Search", "Torment", "TOR");
  }
}

module.exports = ObsessiveSearch;
