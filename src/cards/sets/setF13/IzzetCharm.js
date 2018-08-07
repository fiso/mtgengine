"use strict";
const Constants = require ("../../../Constants");
const IzzetCharmBase = require("../setMM3/IzzetCharm");

class IzzetCharm extends IzzetCharmBase {
  constructor (game) {
    super(game, "Izzet Charm", "Friday Night Magic 2013", "F13");
  }
}

module.exports = IzzetCharm;
