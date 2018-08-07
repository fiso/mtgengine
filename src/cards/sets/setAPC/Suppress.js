"use strict";
const Constants = require ("../../../Constants");
const SuppressBase = require("../setPHUK/Suppress");

class Suppress extends SuppressBase {
  constructor (game) {
    super(game, "Suppress", "Apocalypse", "APC");
  }
}

module.exports = Suppress;
