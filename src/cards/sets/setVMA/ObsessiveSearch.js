"use strict";
const Constants = require ("../../../Constants");
const ObsessiveSearchBase = require("../setTOR/ObsessiveSearch");

class ObsessiveSearch extends ObsessiveSearchBase {
  constructor(game) {
    super(game, "Obsessive Search", "Vintage Masters", "VMA");
  }
}

module.exports = ObsessiveSearch;
