"use strict";
const Constants = require ("../../../Constants");
const EldraziTempleBase = require("../setDDP/EldraziTemple");

class EldraziTemple extends EldraziTempleBase {
  constructor(game) {
    super(game, "Eldrazi Temple", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = EldraziTemple;
