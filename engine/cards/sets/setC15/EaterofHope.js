"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EaterofHopeBase = require("../setBNG/EaterofHope.js");

class EaterofHope extends EaterofHopeBase {
  constructor(game) {
    super(game, "Eater of Hope", "Commander 2015", "C15");
  }
}

module.exports = EaterofHope;
