"use strict";
const Constants = require ("../../../Constants");
const GravediggerBase = require("../setM19/Gravedigger");

class Gravedigger extends GravediggerBase {
  constructor (game) {
    super(game, "Gravedigger", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = Gravedigger;
