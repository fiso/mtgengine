"use strict";
const Constants = require ("../../../Constants");
const GravediggerBase = require("../setBTD/Gravedigger");

class Gravedigger extends GravediggerBase {
  constructor(game) {
    super(game, "Gravedigger", "Tenth Edition", "10E");
  }
}

module.exports = Gravedigger;
