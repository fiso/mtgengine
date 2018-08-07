"use strict";
const Constants = require ("../../../Constants");
const LotusPetalBase = require("../setMPS/LotusPetal");

class LotusPetal extends LotusPetalBase {
  constructor (game) {
    super(game, "Lotus Petal", "From the Vault: Exiled", "V09");
  }
}

module.exports = LotusPetal;
