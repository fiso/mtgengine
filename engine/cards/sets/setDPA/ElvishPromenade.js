"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElvishPromenadeBase = require("../setDD3_EVG/ElvishPromenade.js");

class ElvishPromenade extends ElvishPromenadeBase {
  constructor(game) {
    super(game, "Elvish Promenade", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = ElvishPromenade;
