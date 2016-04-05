"use strict";
const Constants = require ("../../../Constants");
const EldraziTempleBase = require("../setDDP/EldraziTemple");

class EldraziTemple extends EldraziTempleBase {
  constructor(game) {
    super(game, "Eldrazi Temple", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = EldraziTemple;
