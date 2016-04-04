"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HeartstabberMosquitoBase = require("../setDDP/HeartstabberMosquito.js");

class HeartstabberMosquito extends HeartstabberMosquitoBase {
  constructor(game) {
    super(game, "Heartstabber Mosquito", "Zendikar", "ZEN");
  }
}

module.exports = HeartstabberMosquito;
