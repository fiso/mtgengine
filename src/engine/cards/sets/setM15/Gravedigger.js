"use strict";
const Constants = require ("../../../Constants");
const GravediggerBase = require("../setM19/Gravedigger");

class Gravedigger extends GravediggerBase {
  constructor (game) {
    super(game, "Gravedigger", "Magic 2015", "M15");
  }
}

module.exports = Gravedigger;
