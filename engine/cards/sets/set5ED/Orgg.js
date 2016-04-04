"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrggBase = require("../setFEM/Orgg.js");

class Orgg extends OrggBase {
  constructor(game) {
    super(game, "Orgg", "Fifth Edition", "5ED");
  }
}

module.exports = Orgg;
