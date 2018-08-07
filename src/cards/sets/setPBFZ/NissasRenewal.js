"use strict";
const Constants = require ("../../../Constants");
const NissasRenewalBase = require("../setBFZ/NissasRenewal");

class NissasRenewal extends NissasRenewalBase {
  constructor (game) {
    super(game, "Nissa's Renewal", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = NissasRenewal;
