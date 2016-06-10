"use strict";
const Constants = require ("../../../Constants");
const EntreattheAngelsBase = require("../setAVR/EntreattheAngels");

class EntreattheAngels extends EntreattheAngelsBase {
  constructor (game) {
    super(game, "Entreat the Angels", "From the Vault: Angels", "V15");
  }
}

module.exports = EntreattheAngels;
