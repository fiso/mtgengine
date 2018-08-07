"use strict";
const Constants = require ("../../../Constants");
const RootwaterCommandoBase = require("../set10E/RootwaterCommando");

class RootwaterCommando extends RootwaterCommandoBase {
  constructor (game) {
    super(game, "Rootwater Commando", "Nemesis", "NEM");
  }
}

module.exports = RootwaterCommando;
