"use strict";
const Constants = require ("../../../Constants");
const BondsofFaithBase = require("../setDDQ/BondsofFaith");

class BondsofFaith extends BondsofFaithBase {
  constructor(game) {
    super(game, "Bonds of Faith", "Innistrad", "ISD");
  }
}

module.exports = BondsofFaith;
