"use strict";
const Constants = require ("../../../Constants");
const GravediggerBase = require("../setM19/Gravedigger");

class Gravedigger extends GravediggerBase {
  constructor (game) {
    super(game, "Gravedigger", "Beatdown Box Set", "BTD");
  }
}

module.exports = Gravedigger;
