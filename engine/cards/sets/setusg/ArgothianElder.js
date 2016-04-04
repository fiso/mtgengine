"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArgothianElderBase = require("../setBRB/ArgothianElder.js");

class ArgothianElder extends ArgothianElderBase {
  constructor(game) {
    super(game, "Argothian Elder", "Urza's Saga", "USG");
  }
}

module.exports = ArgothianElder;
