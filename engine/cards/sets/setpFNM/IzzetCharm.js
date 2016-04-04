"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IzzetCharmBase = require("../setDDJ/IzzetCharm.js");

class IzzetCharm extends IzzetCharmBase {
  constructor(game) {
    super(game, "Izzet Charm", "Friday Night Magic", "pFNM");
  }
}

module.exports = IzzetCharm;
