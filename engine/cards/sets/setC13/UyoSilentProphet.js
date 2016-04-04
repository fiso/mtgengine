"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UyoSilentProphetBase = require("../setCHK/UyoSilentProphet.js");

class UyoSilentProphet extends UyoSilentProphetBase {
  constructor(game) {
    super(game, "Uyo, Silent Prophet", "Commander 2013 Edition", "C13");
  }
}

module.exports = UyoSilentProphet;
