"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AvenCloudchaserBase = require("../set8ED/AvenCloudchaser.js");

class AvenCloudchaser extends AvenCloudchaserBase {
  constructor(game) {
    super(game, "Aven Cloudchaser", "Odyssey", "ODY");
  }
}

module.exports = AvenCloudchaser;
