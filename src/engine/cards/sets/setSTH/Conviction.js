"use strict";
const Constants = require ("../../../Constants");
const ConvictionBase = require("../setAER/Conviction");

class Conviction extends ConvictionBase {
  constructor (game) {
    super(game, "Conviction", "Stronghold", "STH");
  }
}

module.exports = Conviction;
