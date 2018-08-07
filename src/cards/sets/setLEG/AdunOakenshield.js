"use strict";
const Constants = require ("../../../Constants");
const AdunOakenshieldBase = require("../setMED/AdunOakenshield");

class AdunOakenshield extends AdunOakenshieldBase {
  constructor (game) {
    super(game, "Adun Oakenshield", "Legends", "LEG");
  }
}

module.exports = AdunOakenshield;
