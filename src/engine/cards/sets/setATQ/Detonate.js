"use strict";
const Constants = require ("../../../Constants");
const DetonateBase = require("../setME4/Detonate");

class Detonate extends DetonateBase {
  constructor (game) {
    super(game, "Detonate", "Antiquities", "ATQ");
  }
}

module.exports = Detonate;
