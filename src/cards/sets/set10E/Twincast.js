"use strict";
const Constants = require ("../../../Constants");
const TwincastBase = require("../setM10/Twincast");

class Twincast extends TwincastBase {
  constructor (game) {
    super(game, "Twincast", "Tenth Edition", "10E");
  }
}

module.exports = Twincast;
