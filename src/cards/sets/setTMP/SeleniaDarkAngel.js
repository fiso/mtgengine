"use strict";
const Constants = require ("../../../Constants");
const SeleniaDarkAngelBase = require("../setTPR/SeleniaDarkAngel");

class SeleniaDarkAngel extends SeleniaDarkAngelBase {
  constructor (game) {
    super(game, "Selenia, Dark Angel", "Tempest", "TMP");
  }
}

module.exports = SeleniaDarkAngel;
