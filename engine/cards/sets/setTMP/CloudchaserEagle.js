"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CloudchaserEagleBase = require("../set7ED/CloudchaserEagle.js");

class CloudchaserEagle extends CloudchaserEagleBase {
  constructor(game) {
    super(game, "Cloudchaser Eagle", "Tempest", "TMP");
  }
}

module.exports = CloudchaserEagle;
