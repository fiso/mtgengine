"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UrzasMineBase = require("../setATQ/UrzasMine.js");

class UrzasMine extends UrzasMineBase {
  constructor(game) {
    super(game, "Urza's Mine", "Eighth Edition", "8ED");
  }
}

module.exports = UrzasMine;
