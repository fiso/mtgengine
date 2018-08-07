"use strict";
const Constants = require ("../../../Constants");
const TendershootDryadBase = require("../setPRIX/TendershootDryad");

class TendershootDryad extends TendershootDryadBase {
  constructor (game) {
    super(game, "Tendershoot Dryad", "Rivals of Ixalan", "RIX");
  }
}

module.exports = TendershootDryad;
