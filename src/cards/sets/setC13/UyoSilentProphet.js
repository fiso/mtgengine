"use strict";
const Constants = require ("../../../Constants");
const UyoSilentProphetBase = require("../setCHK/UyoSilentProphet");

class UyoSilentProphet extends UyoSilentProphetBase {
  constructor (game) {
    super(game, "Uyo, Silent Prophet", "Commander 2013 Edition", "C13");
  }
}

module.exports = UyoSilentProphet;
