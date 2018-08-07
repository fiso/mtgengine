"use strict";
const Constants = require ("../../../Constants");
const CryptolithRiteBase = require("../setSOI/CryptolithRite");

class CryptolithRite extends CryptolithRiteBase {
  constructor (game) {
    super(game, "Cryptolith Rite", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = CryptolithRite;
