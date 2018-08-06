"use strict";
const Constants = require ("../../../Constants");
const MistralChargerBase = require("../setDIS/MistralCharger");

class MistralCharger extends MistralChargerBase {
  constructor (game) {
    super(game, "Mistral Charger", "Eternal Masters", "EMA");
  }
}

module.exports = MistralCharger;
