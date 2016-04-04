"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GladecoverScoutBase = require("../setM12/GladecoverScout.js");

class GladecoverScout extends GladecoverScoutBase {
  constructor(game) {
    super(game, "Gladecover Scout", "Magic 2014 Core Set", "M14");
  }
}

module.exports = GladecoverScout;
