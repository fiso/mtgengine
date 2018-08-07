"use strict";
const Constants = require ("../../../Constants");
const VaultofWhispersBase = require("../setHOP/VaultofWhispers");

class VaultofWhispers extends VaultofWhispersBase {
  constructor (game) {
    super(game, "Vault of Whispers", "Mirrodin", "MRD");
  }
}

module.exports = VaultofWhispers;
