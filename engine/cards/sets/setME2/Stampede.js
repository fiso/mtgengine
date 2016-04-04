"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StampedeBase = require("../set5ED/Stampede.js");

class Stampede extends StampedeBase {
  constructor(game) {
    super(game, "Stampede", "Masters Edition II", "ME2");
  }
}

module.exports = Stampede;
