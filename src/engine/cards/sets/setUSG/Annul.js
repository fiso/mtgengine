"use strict";
const Constants = require ("../../../Constants");
const AnnulBase = require("../setTHS/Annul");

class Annul extends AnnulBase {
  constructor (game) {
    super(game, "Annul", "Urza's Saga", "USG");
  }
}

module.exports = Annul;
