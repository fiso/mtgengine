"use strict";
const Constants = require ("../../../Constants");
const ContainmentPriestBase = require("../setMP2/ContainmentPriest");

class ContainmentPriest extends ContainmentPriestBase {
  constructor (game) {
    super(game, "Containment Priest", "Legendary Cube", "PZ1");
  }
}

module.exports = ContainmentPriest;
