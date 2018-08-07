"use strict";
const Constants = require ("../../../Constants");
const UyoSilentProphetBase = require("../setC13/UyoSilentProphet");

class UyoSilentProphet extends UyoSilentProphetBase {
  constructor (game) {
    super(game, "Uyo, Silent Prophet", "Champions of Kamigawa", "CHK");
  }
}

module.exports = UyoSilentProphet;
