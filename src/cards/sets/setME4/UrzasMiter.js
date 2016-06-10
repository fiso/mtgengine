"use strict";
const Constants = require ("../../../Constants");
const UrzasMiterBase = require("../setATQ/UrzasMiter");

class UrzasMiter extends UrzasMiterBase {
  constructor (game) {
    super(game, "Urza's Miter", "Masters Edition IV", "ME4");
  }
}

module.exports = UrzasMiter;
