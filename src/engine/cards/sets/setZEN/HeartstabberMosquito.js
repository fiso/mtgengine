"use strict";
const Constants = require ("../../../Constants");
const HeartstabberMosquitoBase = require("../setDDP/HeartstabberMosquito");

class HeartstabberMosquito extends HeartstabberMosquitoBase {
  constructor (game) {
    super(game, "Heartstabber Mosquito", "Zendikar", "ZEN");
  }
}

module.exports = HeartstabberMosquito;
