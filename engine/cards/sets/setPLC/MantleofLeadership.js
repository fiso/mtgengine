"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MantleofLeadership extends Card {
  constructor(game) {
    super(game, "Mantle of Leadership", "Planar Chaos", "PLC");
  }
}

module.exports = MantleofLeadership;
