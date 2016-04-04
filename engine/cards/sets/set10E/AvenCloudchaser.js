"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AvenCloudchaserBase = require("../set8ED/AvenCloudchaser.js");

class AvenCloudchaser extends AvenCloudchaserBase {
  constructor(game) {
    super(game, "Aven Cloudchaser", "Tenth Edition", "10E");
  }
}

module.exports = AvenCloudchaser;
