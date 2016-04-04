"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GravediggerBase = require("../setBTD/Gravedigger.js");

class Gravedigger extends GravediggerBase {
  constructor(game) {
    super(game, "Gravedigger", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Gravedigger;
