"use strict";
const Constants = require ("../../../Constants");
const GravediggerBase = require("../setBTD/Gravedigger");

class Gravedigger extends GravediggerBase {
  constructor (game) {
    super(game, "Gravedigger", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Gravedigger;
