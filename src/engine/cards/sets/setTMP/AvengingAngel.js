"use strict";
const Constants = require ("../../../Constants");
const AvengingAngelBase = require("../setTPR/AvengingAngel");

class AvengingAngel extends AvengingAngelBase {
  constructor (game) {
    super(game, "Avenging Angel", "Tempest", "TMP");
  }
}

module.exports = AvengingAngel;
