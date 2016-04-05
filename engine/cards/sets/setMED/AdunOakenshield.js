"use strict";
const Constants = require ("../../../Constants");
const AdunOakenshieldBase = require("../setLEG/AdunOakenshield");

class AdunOakenshield extends AdunOakenshieldBase {
  constructor(game) {
    super(game, "Adun Oakenshield", "Masters Edition", "MED");
  }
}

module.exports = AdunOakenshield;
