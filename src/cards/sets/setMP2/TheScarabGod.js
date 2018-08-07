"use strict";
const Constants = require ("../../../Constants");
const TheScarabGodBase = require("../setHOU/TheScarabGod");

class TheScarabGod extends TheScarabGodBase {
  constructor (game) {
    super(game, "The Scarab God", "Amonkhet Invocations", "MP2");
  }
}

module.exports = TheScarabGod;
