"use strict";
const Constants = require ("../../../Constants");
const UrzasMiterBase = require("../setME4/UrzasMiter");

class UrzasMiter extends UrzasMiterBase {
  constructor (game) {
    super(game, "Urza's Miter", "Antiquities", "ATQ");
  }
}

module.exports = UrzasMiter;
