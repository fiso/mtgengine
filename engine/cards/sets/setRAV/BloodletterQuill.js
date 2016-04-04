"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodletterQuill extends Card {
  constructor(game) {
    super(game, "Bloodletter Quill", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = BloodletterQuill;
