"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SneakyHomunculusBase = require("../set8ED/SneakyHomunculus.js");

class SneakyHomunculus extends SneakyHomunculusBase {
  constructor(game) {
    super(game, "Sneaky Homunculus", "Nemesis", "NMS");
  }
}

module.exports = SneakyHomunculus;
