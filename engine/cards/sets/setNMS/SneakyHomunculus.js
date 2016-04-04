"use strict";
const Constants = require ("../../../Constants");
const SneakyHomunculusBase = require("../set8ED/SneakyHomunculus");

class SneakyHomunculus extends SneakyHomunculusBase {
  constructor(game) {
    super(game, "Sneaky Homunculus", "Nemesis", "NMS");
  }
}

module.exports = SneakyHomunculus;
