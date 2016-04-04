"use strict";
const Constants = require ("../../../Constants");
const IzzetCharmBase = require("../setDDJ/IzzetCharm");

class IzzetCharm extends IzzetCharmBase {
  constructor(game) {
    super(game, "Izzet Charm", "Return to Ravnica", "RTR");
  }
}

module.exports = IzzetCharm;
