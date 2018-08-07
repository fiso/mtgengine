"use strict";
const Constants = require ("../../../Constants");
const ContainmentPriestBase = require("../setMP2/ContainmentPriest");

class ContainmentPriest extends ContainmentPriestBase {
  constructor (game) {
    super(game, "Containment Priest", "Commander 2014", "C14");
  }
}

module.exports = ContainmentPriest;
