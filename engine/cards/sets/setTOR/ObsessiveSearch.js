"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ObsessiveSearch extends Card {
  constructor(game) {
    super(game, "Obsessive Search", "Torment", "TOR");
  }
}

module.exports = ObsessiveSearch;
