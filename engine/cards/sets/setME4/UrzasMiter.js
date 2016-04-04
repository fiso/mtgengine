"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UrzasMiterBase = require("../setATQ/UrzasMiter.js");

class UrzasMiter extends UrzasMiterBase {
  constructor(game) {
    super(game, "Urza's Miter", "Masters Edition IV", "ME4");
  }
}

module.exports = UrzasMiter;
