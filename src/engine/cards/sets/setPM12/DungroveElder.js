"use strict";
const Constants = require ("../../../Constants");
const DungroveElderBase = require("../setM12/DungroveElder");

class DungroveElder extends DungroveElderBase {
  constructor (game) {
    super(game, "Dungrove Elder", "Magic 2012 Promos", "PM12");
  }
}

module.exports = DungroveElder;
