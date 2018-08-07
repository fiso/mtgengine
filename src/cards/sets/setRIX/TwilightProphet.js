"use strict";
const Constants = require ("../../../Constants");
const TwilightProphetBase = require("../setPRIX/TwilightProphet");

class TwilightProphet extends TwilightProphetBase {
  constructor (game) {
    super(game, "Twilight Prophet", "Rivals of Ixalan", "RIX");
  }
}

module.exports = TwilightProphet;
