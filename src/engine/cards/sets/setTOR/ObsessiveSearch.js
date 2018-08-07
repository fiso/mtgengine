"use strict";
const Constants = require ("../../../Constants");
const ObsessiveSearchBase = require("../setVMA/ObsessiveSearch");

class ObsessiveSearch extends ObsessiveSearchBase {
  constructor (game) {
    super(game, "Obsessive Search", "Torment", "TOR");
  }
}

module.exports = ObsessiveSearch;
