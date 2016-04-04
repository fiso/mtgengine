"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NightveilSpecterBase = require("../setGTC/NightveilSpecter.js");

class NightveilSpecter extends NightveilSpecterBase {
  constructor(game) {
    super(game, "Nightveil Specter", "Media Inserts", "pMEI");
  }
}

module.exports = NightveilSpecter;
