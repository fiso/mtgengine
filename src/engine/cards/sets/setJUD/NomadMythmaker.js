"use strict";
const Constants = require ("../../../Constants");
const NomadMythmakerBase = require("../set10E/NomadMythmaker");

class NomadMythmaker extends NomadMythmakerBase {
  constructor (game) {
    super(game, "Nomad Mythmaker", "Judgment", "JUD");
  }
}

module.exports = NomadMythmaker;
