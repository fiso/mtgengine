"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DungroveElderBase = require("../setM12/DungroveElder.js");

class DungroveElder extends DungroveElderBase {
  constructor(game) {
    super(game, "Dungrove Elder", "Magic Game Day", "pMGD");
  }
}

module.exports = DungroveElder;
