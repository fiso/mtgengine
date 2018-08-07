"use strict";
const Constants = require ("../../../Constants");
const DungroveElderBase = require("../setM12/DungroveElder");

class DungroveElder extends DungroveElderBase {
  constructor (game) {
    super(game, "Dungrove Elder", "Magic Online Promos", "PRM");
  }
}

module.exports = DungroveElder;
