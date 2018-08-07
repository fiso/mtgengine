"use strict";
const Constants = require ("../../../Constants");
const AnarchyBase = require("../setME2/Anarchy");

class Anarchy extends AnarchyBase {
  constructor (game) {
    super(game, "Anarchy", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = Anarchy;
