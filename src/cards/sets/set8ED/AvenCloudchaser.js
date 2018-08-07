"use strict";
const Constants = require ("../../../Constants");
const AvenCloudchaserBase = require("../set10E/AvenCloudchaser");

class AvenCloudchaser extends AvenCloudchaserBase {
  constructor (game) {
    super(game, "Aven Cloudchaser", "Eighth Edition", "8ED");
  }
}

module.exports = AvenCloudchaser;
