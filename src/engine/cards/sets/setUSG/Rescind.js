"use strict";
const Constants = require ("../../../Constants");
const RescindBase = require("../setVMA/Rescind");

class Rescind extends RescindBase {
  constructor (game) {
    super(game, "Rescind", "Urza's Saga", "USG");
  }
}

module.exports = Rescind;
