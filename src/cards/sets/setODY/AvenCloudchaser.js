"use strict";
const Constants = require ("../../../Constants");
const AvenCloudchaserBase = require("../set8ED/AvenCloudchaser");

class AvenCloudchaser extends AvenCloudchaserBase {
  constructor(game) {
    super(game, "Aven Cloudchaser", "Odyssey", "ODY");
  }
}

module.exports = AvenCloudchaser;
