"use strict";
const Constants = require ("../../../Constants");
const TendrilsofAgonyBase = require("../setVMA/TendrilsofAgony");

class TendrilsofAgony extends TendrilsofAgonyBase {
  constructor (game) {
    super(game, "Tendrils of Agony", "Magic Online Promos", "PRM");
  }
}

module.exports = TendrilsofAgony;
