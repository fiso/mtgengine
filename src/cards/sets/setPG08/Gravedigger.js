"use strict";
const Constants = require ("../../../Constants");
const GravediggerBase = require("../setM19/Gravedigger");

class Gravedigger extends GravediggerBase {
  constructor (game) {
    super(game, "Gravedigger", "Gateway 2008", "PG08");
  }
}

module.exports = Gravedigger;
