"use strict";
const Constants = require ("../../../Constants");
const ElvishEulogistBase = require("../setEVG/ElvishEulogist");

class ElvishEulogist extends ElvishEulogistBase {
  constructor (game) {
    super(game, "Elvish Eulogist", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = ElvishEulogist;
