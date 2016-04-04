"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AdunOakenshieldBase = require("../setLEG/AdunOakenshield.js");

class AdunOakenshield extends AdunOakenshieldBase {
  constructor(game) {
    super(game, "Adun Oakenshield", "Masters Edition", "MED");
  }
}

module.exports = AdunOakenshield;
