"use strict";
const Constants = require ("../../../Constants");
const GravediggerBase = require("../setBTD/Gravedigger");

class Gravedigger extends GravediggerBase {
  constructor(game) {
    super(game, "Gravedigger", "Magic 2011", "M11");
  }
}

module.exports = Gravedigger;
