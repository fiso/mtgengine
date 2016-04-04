"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SunpetalGroveBase = require("../setM10/SunpetalGrove.js");

class SunpetalGrove extends SunpetalGroveBase {
  constructor(game) {
    super(game, "Sunpetal Grove", "Magic 2011", "M11");
  }
}

module.exports = SunpetalGrove;
