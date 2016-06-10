"use strict";
const Constants = require ("../../../Constants");
const GeistflameBase = require("../setDDK/Geistflame");

class Geistflame extends GeistflameBase {
  constructor (game) {
    super(game, "Geistflame", "Innistrad", "ISD");
  }
}

module.exports = Geistflame;
