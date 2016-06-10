"use strict";
const Constants = require ("../../../Constants");
const AvengingAngelBase = require("../setTMP/AvengingAngel");

class AvengingAngel extends AvengingAngelBase {
  constructor (game) {
    super(game, "Avenging Angel", "Tempest Remastered", "TPR");
  }
}

module.exports = AvengingAngel;
