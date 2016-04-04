"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GravediggerBase = require("../setBTD/Gravedigger.js");

class Gravedigger extends GravediggerBase {
  constructor(game) {
    super(game, "Gravedigger", "Tempest", "TMP");
  }
}

module.exports = Gravedigger;
