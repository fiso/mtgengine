"use strict";
const Constants = require ("../../../Constants");
const FireAntsBase = require("../setBRB/FireAnts");

class FireAnts extends FireAntsBase {
  constructor (game) {
    super(game, "Fire Ants", "Urza's Saga", "USG");
  }
}

module.exports = FireAnts;
