"use strict";
const Constants = require ("../../../Constants");
const AngraththeFlameChainedBase = require("../setPRIX/AngraththeFlameChained");

class AngraththeFlameChained extends AngraththeFlameChainedBase {
  constructor (game) {
    super(game, "Angrath, the Flame-Chained", "Rivals of Ixalan", "RIX");
  }
}

module.exports = AngraththeFlameChained;
