"use strict";
const Constants = require ("../../../Constants");
const TendrilsofAgonyBase = require("../setVMA/TendrilsofAgony");

class TendrilsofAgony extends TendrilsofAgonyBase {
  constructor (game) {
    super(game, "Tendrils of Agony", "Friday Night Magic 2008", "F08");
  }
}

module.exports = TendrilsofAgony;
