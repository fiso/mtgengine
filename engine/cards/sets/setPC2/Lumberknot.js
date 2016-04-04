"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LumberknotBase = require("../setISD/Lumberknot.js");

class Lumberknot extends LumberknotBase {
  constructor(game) {
    super(game, "Lumberknot", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Lumberknot;
