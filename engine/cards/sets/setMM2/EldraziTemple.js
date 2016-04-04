"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EldraziTempleBase = require("../setDDP/EldraziTemple.js");

class EldraziTemple extends EldraziTempleBase {
  constructor(game) {
    super(game, "Eldrazi Temple", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = EldraziTemple;
