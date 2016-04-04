"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ConcentrateBase = require("../setC14/Concentrate.js");

class Concentrate extends ConcentrateBase {
  constructor(game) {
    super(game, "Concentrate", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Concentrate;
