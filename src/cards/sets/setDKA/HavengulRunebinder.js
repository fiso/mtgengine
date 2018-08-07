"use strict";
const Constants = require ("../../../Constants");
const HavengulRunebinderBase = require("../setDDQ/HavengulRunebinder");

class HavengulRunebinder extends HavengulRunebinderBase {
  constructor (game) {
    super(game, "Havengul Runebinder", "Dark Ascension", "DKA");
  }
}

module.exports = HavengulRunebinder;
