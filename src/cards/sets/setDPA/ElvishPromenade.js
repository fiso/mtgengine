"use strict";
const Constants = require ("../../../Constants");
const ElvishPromenadeBase = require("../setEVG/ElvishPromenade");

class ElvishPromenade extends ElvishPromenadeBase {
  constructor (game) {
    super(game, "Elvish Promenade", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = ElvishPromenade;
