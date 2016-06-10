"use strict";
const Constants = require ("../../../Constants");
const UrzasMineBase = require("../setATQ/UrzasMine");

class UrzasMine extends UrzasMineBase {
  constructor (game) {
    super(game, "Urza's Mine", "Chronicles", "CHR");
  }
}

module.exports = UrzasMine;
