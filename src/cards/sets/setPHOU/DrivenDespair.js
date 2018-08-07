"use strict";
const Constants = require ("../../../Constants");
const DrivenDespairBase = require("../setHOU/DrivenDespair");

class DrivenDespair extends DrivenDespairBase {
  constructor (game) {
    super(game, "Driven // Despair", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = DrivenDespair;
