"use strict";
const Constants = require ("../../../Constants");
const VaultofWhispersBase = require("../setHOP/VaultofWhispers");

class VaultofWhispers extends VaultofWhispersBase {
  constructor (game) {
    super(game, "Vault of Whispers", "World Championship Decks 2004", "WC04");
  }
}

module.exports = VaultofWhispers;
