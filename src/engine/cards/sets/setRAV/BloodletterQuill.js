"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodletterQuill extends UnimplementedCard {
  constructor (game) {
    super(game, "Bloodletter Quill", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = BloodletterQuill;
