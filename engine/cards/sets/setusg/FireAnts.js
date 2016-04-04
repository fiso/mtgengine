"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FireAntsBase = require("../setBRB/FireAnts.js");

class FireAnts extends FireAntsBase {
  constructor(game) {
    super(game, "Fire Ants", "Urza's Saga", "USG");
  }
}

module.exports = FireAnts;
