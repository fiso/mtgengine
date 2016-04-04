"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElvishEulogistBase = require("../setDD3_EVG/ElvishEulogist.js");

class ElvishEulogist extends ElvishEulogistBase {
  constructor(game) {
    super(game, "Elvish Eulogist", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = ElvishEulogist;
