"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EldraziTempleBase = require("../setDDP/EldraziTemple.js");

class EldraziTemple extends EldraziTempleBase {
  constructor(game) {
    super(game, "Eldrazi Temple", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = EldraziTemple;
