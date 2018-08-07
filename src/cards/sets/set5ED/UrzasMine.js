"use strict";
const Constants = require ("../../../Constants");
const UrzasMineBase = require("../setME4/UrzasMine");

class UrzasMine extends UrzasMineBase {
  constructor (game) {
    super(game, "Urza's Mine", "Fifth Edition", "5ED");
  }
}

module.exports = UrzasMine;
