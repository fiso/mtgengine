"use strict";
const Constants = require ("../../../Constants");
const HaphazardBombardmentBase = require("../setDOM/HaphazardBombardment");

class HaphazardBombardment extends HaphazardBombardmentBase {
  constructor (game) {
    super(game, "Haphazard Bombardment", "Dominaria Promos", "PDOM");
  }
}

module.exports = HaphazardBombardment;
