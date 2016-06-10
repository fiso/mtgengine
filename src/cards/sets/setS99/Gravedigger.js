"use strict";
const Constants = require ("../../../Constants");
const GravediggerBase = require("../setBTD/Gravedigger");

class Gravedigger extends GravediggerBase {
  constructor (game) {
    super(game, "Gravedigger", "Starter 1999", "S99");
  }
}

module.exports = Gravedigger;
