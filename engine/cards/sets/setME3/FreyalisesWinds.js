"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FreyalisesWindsBase = require("../setICE/FreyalisesWinds.js");

class FreyalisesWinds extends FreyalisesWindsBase {
  constructor(game) {
    super(game, "Freyalise's Winds", "Masters Edition III", "ME3");
  }
}

module.exports = FreyalisesWinds;
