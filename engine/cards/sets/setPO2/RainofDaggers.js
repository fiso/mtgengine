"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RainofDaggersBase = require("../setME4/RainofDaggers.js");

class RainofDaggers extends RainofDaggersBase {
  constructor(game) {
    super(game, "Rain of Daggers", "Portal Second Age", "PO2");
  }
}

module.exports = RainofDaggers;
