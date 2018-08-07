"use strict";
const Constants = require ("../../../Constants");
const PutridLeechBase = require("../setDDM/PutridLeech");

class PutridLeech extends PutridLeechBase {
  constructor (game) {
    super(game, "Putrid Leech", "Alara Reborn", "ARB");
  }
}

module.exports = PutridLeech;
