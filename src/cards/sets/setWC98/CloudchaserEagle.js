"use strict";
const Constants = require ("../../../Constants");
const CloudchaserEagleBase = require("../set7ED/CloudchaserEagle");

class CloudchaserEagle extends CloudchaserEagleBase {
  constructor (game) {
    super(game, "Cloudchaser Eagle", "World Championship Decks 1998", "WC98");
  }
}

module.exports = CloudchaserEagle;
