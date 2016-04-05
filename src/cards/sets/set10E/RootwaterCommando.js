"use strict";
const Constants = require ("../../../Constants");
const RootwaterCommandoBase = require("../setNMS/RootwaterCommando");

class RootwaterCommando extends RootwaterCommandoBase {
  constructor(game) {
    super(game, "Rootwater Commando", "Tenth Edition", "10E");
  }
}

module.exports = RootwaterCommando;
