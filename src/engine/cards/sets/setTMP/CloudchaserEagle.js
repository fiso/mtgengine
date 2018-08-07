"use strict";
const Constants = require ("../../../Constants");
const CloudchaserEagleBase = require("../set7ED/CloudchaserEagle");

class CloudchaserEagle extends CloudchaserEagleBase {
  constructor (game) {
    super(game, "Cloudchaser Eagle", "Tempest", "TMP");
  }
}

module.exports = CloudchaserEagle;
