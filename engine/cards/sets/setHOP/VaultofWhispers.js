"use strict";
const Constants = require ("../../../Constants");
const VaultofWhispersBase = require("../setMRD/VaultofWhispers");

class VaultofWhispers extends VaultofWhispersBase {
  constructor(game) {
    super(game, "Vault of Whispers", "Planechase", "HOP");
  }
}

module.exports = VaultofWhispers;
