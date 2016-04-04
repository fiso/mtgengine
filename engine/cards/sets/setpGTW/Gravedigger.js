"use strict";
const Constants = require ("../../../Constants");
const GravediggerBase = require("../setBTD/Gravedigger");

class Gravedigger extends GravediggerBase {
  constructor(game) {
    super(game, "Gravedigger", "Gateway", "pGTW");
  }
}

module.exports = Gravedigger;
