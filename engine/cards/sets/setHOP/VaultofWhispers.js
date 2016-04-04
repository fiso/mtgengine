"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VaultofWhispersBase = require("../setMRD/VaultofWhispers.js");

class VaultofWhispers extends VaultofWhispersBase {
  constructor(game) {
    super(game, "Vault of Whispers", "Planechase", "HOP");
  }
}

module.exports = VaultofWhispers;
