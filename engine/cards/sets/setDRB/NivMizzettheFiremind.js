"use strict";
const Constants = require ("../../../Constants");
const NivMizzettheFiremindBase = require("../setpCMP/NivMizzettheFiremind");

class NivMizzettheFiremind extends NivMizzettheFiremindBase {
  constructor(game) {
    super(game, "Niv-Mizzet, the Firemind", "From the Vault: Dragons", "DRB");
  }
}

module.exports = NivMizzettheFiremind;
