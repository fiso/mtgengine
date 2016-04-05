"use strict";
const Constants = require ("../../../Constants");
const AvenCloudchaserBase = require("../set8ED/AvenCloudchaser");

class AvenCloudchaser extends AvenCloudchaserBase {
  constructor(game) {
    super(game, "Aven Cloudchaser", "Tenth Edition", "10E");
  }
}

module.exports = AvenCloudchaser;
