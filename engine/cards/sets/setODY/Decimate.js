"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DecimateBase = require("../setCNS/Decimate.js");

class Decimate extends DecimateBase {
  constructor(game) {
    super(game, "Decimate", "Odyssey", "ODY");
  }
}

module.exports = Decimate;
