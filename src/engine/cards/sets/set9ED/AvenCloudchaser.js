"use strict";
const Constants = require ("../../../Constants");
const AvenCloudchaserBase = require("../set10E/AvenCloudchaser");

class AvenCloudchaser extends AvenCloudchaserBase {
  constructor (game) {
    super(game, "Aven Cloudchaser", "Ninth Edition", "9ED");
  }
}

module.exports = AvenCloudchaser;
