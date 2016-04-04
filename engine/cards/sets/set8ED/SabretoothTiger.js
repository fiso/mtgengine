"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SabretoothTigerBase = require("../set6ED/SabretoothTiger.js");

class SabretoothTiger extends SabretoothTigerBase {
  constructor(game) {
    super(game, "Sabretooth Tiger", "Eighth Edition", "8ED");
  }
}

module.exports = SabretoothTiger;
