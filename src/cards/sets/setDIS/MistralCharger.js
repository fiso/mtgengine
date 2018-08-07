"use strict";
const Constants = require ("../../../Constants");
const MistralChargerBase = require("../setEMA/MistralCharger");

class MistralCharger extends MistralChargerBase {
  constructor (game) {
    super(game, "Mistral Charger", "Dissension", "DIS");
  }
}

module.exports = MistralCharger;
