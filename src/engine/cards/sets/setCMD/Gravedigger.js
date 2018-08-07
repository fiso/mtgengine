"use strict";
const Constants = require ("../../../Constants");
const GravediggerBase = require("../setM19/Gravedigger");

class Gravedigger extends GravediggerBase {
  constructor (game) {
    super(game, "Gravedigger", "Commander 2011", "CMD");
  }
}

module.exports = Gravedigger;
