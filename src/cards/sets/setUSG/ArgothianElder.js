"use strict";
const Constants = require ("../../../Constants");
const ArgothianElderBase = require("../setBRB/ArgothianElder");

class ArgothianElder extends ArgothianElderBase {
  constructor (game) {
    super(game, "Argothian Elder", "Urza's Saga", "USG");
  }
}

module.exports = ArgothianElder;
