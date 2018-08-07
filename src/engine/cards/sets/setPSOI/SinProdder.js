"use strict";
const Constants = require ("../../../Constants");
const SinProdderBase = require("../setSOI/SinProdder");

class SinProdder extends SinProdderBase {
  constructor (game) {
    super(game, "Sin Prodder", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = SinProdder;
