"use strict";
const Constants = require ("../../../Constants");
const NomadMythmakerBase = require("../setJUD/NomadMythmaker");

class NomadMythmaker extends NomadMythmakerBase {
  constructor(game) {
    super(game, "Nomad Mythmaker", "Tenth Edition", "10E");
  }
}

module.exports = NomadMythmaker;
