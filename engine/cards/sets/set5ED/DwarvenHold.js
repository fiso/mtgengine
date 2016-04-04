"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DwarvenHoldBase = require("../setFEM/DwarvenHold.js");

class DwarvenHold extends DwarvenHoldBase {
  constructor(game) {
    super(game, "Dwarven Hold", "Fifth Edition", "5ED");
  }
}

module.exports = DwarvenHold;
