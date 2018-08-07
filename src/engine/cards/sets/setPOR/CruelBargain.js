"use strict";
const Constants = require ("../../../Constants");
const CruelBargainBase = require("../setVMA/CruelBargain");

class CruelBargain extends CruelBargainBase {
  constructor (game) {
    super(game, "Cruel Bargain", "Portal", "POR");
  }
}

module.exports = CruelBargain;
