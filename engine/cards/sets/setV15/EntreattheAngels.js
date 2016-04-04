"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EntreattheAngelsBase = require("../setAVR/EntreattheAngels.js");

class EntreattheAngels extends EntreattheAngelsBase {
  constructor(game) {
    super(game, "Entreat the Angels", "From the Vault: Angels", "V15");
  }
}

module.exports = EntreattheAngels;
