"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ObsessiveSearchBase = require("../setTOR/ObsessiveSearch.js");

class ObsessiveSearch extends ObsessiveSearchBase {
  constructor(game) {
    super(game, "Obsessive Search", "Vintage Masters", "VMA");
  }
}

module.exports = ObsessiveSearch;
